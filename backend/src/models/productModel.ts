import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import ProductCart from "./productCartModel";

@Table({
    tableName: "products",
    timestamps: false
})
export default class Product extends Model{
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
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    price!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock!: number;

    @HasMany(()=>ProductCart)
    productCarts!: ProductCart[];

}