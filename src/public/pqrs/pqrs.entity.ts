import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript'
import { Ejecucion } from '../ejecuciones/ejecuciones.entity'
import { Campo } from '../campos/campos.entity'
import { Estado } from '../estados/estados.entity'
import { Predio } from '../predios/predios.entity'
import { ProductoAGestionar } from '../productos_a_gestionar/productos_a_gestionar.entity'
import { Profesional } from '../profesionales/profesionales.entity'
import { TipoPQR } from '../tipos-pqr/tipos-pqr.entity'

@Table({
  schema: 'public',
  tableName: 'pqrs',
})
export class Pqr extends Model<Pqr> {
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
  campo_id: number

  @Column
  tipo_pqr_id: number

  @Column
  estado_id: number

  @Column
  fecha_solicitud: Date

  @Column
  detalle: string

  @Column
  tiempo_gestion: number

  @Column
  fecha_cancelacion: Date

  @Column({ type: DataType.JSON })
  observaciones_seguimiento: JSON

  @Column
  producto_gestionar_id: number

  @Column
  profesional_id: number

  @Column
  fecha_cierre_respuesta: Date

  @Column
  fecha_cierre_queja: Date

  @Column
  predio_id: number

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => Campo, { foreignKey: 'campo_id', as: 'Campo' })
  Campo: Campo

  @BelongsTo(() => Estado, { foreignKey: 'estado_id', as: 'Estado' })
  Estado: Estado

  @BelongsTo(() => Predio, { foreignKey: 'predio_id', as: 'Predio' })
  Predio: Predio

  @BelongsTo(() => ProductoAGestionar, {
    foreignKey: 'producto_gestionar_id',
    as: 'ProductoAGestionar',
  })
  ProductoAGestionar: ProductoAGestionar

  @BelongsTo(() => Profesional, {
    foreignKey: 'profesional_id',
    as: 'Profesional',
  })
  Profesional: Profesional

  @BelongsTo(() => TipoPQR, { foreignKey: 'tipo_pqr_id', as: 'TipoPQR' })
  TipoPQR: TipoPQR

  @HasMany(() => Ejecucion, { as: 'Ejecucion', foreignKey: 'pqr_id' })
  Ejecucion: Ejecucion[]
}
