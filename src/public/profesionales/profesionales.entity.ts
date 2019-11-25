import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  HasOne,
} from 'sequelize-typescript'
import { Pqr } from '../pqrs/pqrs.entity'
import { Usuario } from '../usuarios/usuarios.entity'

@Table({
  schema: 'public',
  tableName: 'profesionales',
})
export class Profesional extends Model<Profesional> {
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
  nombres: string

  @Column
  cargo: string

  @Column
  apellidos: string

  @Column
  correo: string

  @Column
  telefono: string

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @HasMany(() => Pqr, { as: 'Pqr', foreignKey: 'profesional_id' })
  Pqr: Pqr[]

  @HasOne(() => Usuario, { as: 'Usuario', foreignKey: 'profesional_id' })
  Usuario: Usuario
}
