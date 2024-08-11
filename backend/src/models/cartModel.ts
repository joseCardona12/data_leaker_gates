import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";
import ProductCart from "./productCartModel";

@Table({
    tableName: "carts",
    timestamps: false
})
export default class Cart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(()=>User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id!: number;

    @BelongsTo(()=>User)
    user!: User;

    @HasMany(()=>ProductCart)
    productCarts!:ProductCart[];

}