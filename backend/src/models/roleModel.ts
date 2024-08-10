import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";

@Table({
    tableName: "roles",
    timestamps: false
})
export default class Role extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    name!: string;

    @HasMany(()=>User)
    users!: User[];
}