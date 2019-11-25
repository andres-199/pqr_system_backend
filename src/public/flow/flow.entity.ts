import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Pqr } from '../pqrs/pqrs.entity'
import { Profesional } from '../profesionales/profesionales.entity'

@Table({
  schema: 'public',
  tableName: 'flow',
})
export class Flow extends Model<Flow> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number

  @Column
  pqr_id: number

  @Column
  profesional_id: number

  @Column({ type: DataType.JSON })
  archivos: JSON

  @Column
  fecha: Date

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => Pqr, { foreignKey: 'pqr_id', as: 'Pqr' })
  Pqr: Pqr

  @BelongsTo(() => Profesional, {
    foreignKey: 'profesional_id',
    as: 'Profesional',
  })
  Profesional: Profesional
}
