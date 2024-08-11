import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";
import ProductCart from "./productCartModel";

@Table({
    tableName: "orders",
    timestamps: false
})
export default class Order extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    total!: number;

    @ForeignKey(()=>User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id!: number;

    @ForeignKey(()=>ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productCart_id!: number;

    @BelongsTo(()=>User)
    user!:User;

    @BelongsTo(()=>ProductCart)
    productCart!: ProductCart;

}