import { AutoIncrement, Column, DataType, ForeignKey, PrimaryKey, Table, Model, HasOne, BelongsTo } from "sequelize-typescript";
import Role from "./roleModel";
import Entity from "./entityModel";

@Table({
    tableName: "permissions",
    timestamps: false
})
export default class Permission extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canDelete!: boolean;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canGet!: boolean;

    @ForeignKey(()=>Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    role_id!: number;

    @ForeignKey(()=>Entity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    entity_id!: number;

    @BelongsTo(()=>Role)
    role!:Role;

    @BelongsTo(()=>Entity)
    entity!:Entity;
}