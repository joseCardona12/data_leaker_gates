import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Cart from "./cartModel";
import Product from "./productModel";
import Order from "./orderModel";

@Table({
    tableName: "productCarts",
    timestamps: false
})
export default class ProductCart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number;

    @ForeignKey(()=>Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cart_id!: number;

    @ForeignKey(()=>Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    product_id!: number;

    @BelongsTo(()=>Product)
    product!: Product;

    @BelongsTo(()=>Cart)
    cart!: Cart;
}