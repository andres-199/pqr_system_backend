import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Profesional } from '../profesionales/profesionales.entity'
import { Rol } from '../roles/roles.entity'

@Table({
  schema: 'public',
  tableName: 'usuarios',
})
export class Usuario extends Model<Usuario> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number

  @Column
  username: string

  @Column
  enabled: boolean

  @Column
  password: string

  @Column
  rol_id: number

  @Column
  profesional_id: number


  @BelongsTo(() => Profesional, {
    foreignKey: 'profesional_id',
    as: 'Profesional',
  })
  Profesional: Profesional

  @BelongsTo(() => Rol, { foreignKey: 'rol_id', as: 'Rol' })
  Rol: Rol
}
