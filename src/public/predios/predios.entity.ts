import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Pqr } from '../pqrs/pqrs.entity'

@Table({
  schema: 'public',
  tableName: 'predios',
})
export class Predio extends Model<Predio> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number

  @Column
  codigo: string

  @Column
  nombre: string

  @Column
  requirente: string

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @HasMany(() => Pqr, { as: 'Pqr', foreignKey: 'predio_id' })
  Pqr: Pqr[]
}
