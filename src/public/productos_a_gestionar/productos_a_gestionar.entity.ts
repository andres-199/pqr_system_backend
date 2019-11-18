import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Pqr } from '../pqrs/pqrs.entity'

@Table({
  schema: 'public',
  tableName: 'productos_a_gestionar',
})
export class ProductoAGestionar extends Model<ProductoAGestionar> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number

  @Column
  codigo: number

  @Column
  nombre: string

  @Column
  descripcion: string

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @HasMany(() => Pqr, { as: 'Pqr', foreignKey: 'producto_gestionar_id' })
  Pqr: Pqr[]
}
