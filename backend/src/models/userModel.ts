import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import Role from "./roleModel";
import Cart from "./cartModel";
import Order from "./orderModel";
@Table({
    tableName: "users",
    timestamps: false
})
export default class User extends Model{
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

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    email!: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    password!: string;

    @ForeignKey(()=>Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    role_id!: number;

    @BelongsTo(()=>Role)
    role!:Role;

    @HasOne(()=>Cart)
    cart!:Cart;

    @HasMany(()=>Order)
    orders!: Order;
}