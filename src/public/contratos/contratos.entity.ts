import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
  schema: 'public',
  tableName: 'contratos',
})
export class Contrato extends Model<Contrato> {
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
  fecha: Date

  @Column
  valor: number

  @Column
  fecha_entrega: Date

  @Column
  createdAt: Date

  @Column
  updatedAt: Date
}
