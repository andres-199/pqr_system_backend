import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Pqr } from '../pqrs/pqrs.entity'

@Table({
	schema: 'public',
	tableName: 'campos',
})

export class Campo extends Model<Campo> {

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



  @HasMany(() => Pqr, { as: 'Pqr', foreignKey: 'campo_id' })
	Pqr: Pqr[]


}
