import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Pqr } from '../pqrs/pqrs.entity'

@Table({
  schema: 'public',
  tableName: 'ejecuciones',
})
export class Ejecucion extends Model<Ejecucion> {
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

  @Column({ type: DataType.JSON })
  actividades: JSON

  @Column
  codigo: number

  @Column
  fecha_visita_campo: Date

  @Column
  fecha_entrega_revision: Date

  @Column
  fecha_aprovacion_respuesta: Date

  @Column
  fecha_entrega_respuesta: Date

  @Column
  fecha_cierre_respuesta: Date

  @Column
  requiere_accion_posterior: boolean

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => Pqr, { foreignKey: 'pqr_id', as: 'Pqr' })
  Pqr: Pqr
}
