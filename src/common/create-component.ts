var inquirer = require('inquirer');
var fs = require('fs');
var dir = './src/'
const chalk = require('chalk');
const magenta = chalk.bold.magenta
const green = chalk.bold.green

let answers = null

let colsFormat = []
colsFormat['smallint'] = 'number'
colsFormat['integer'] = 'number'
colsFormat['character'] = 'string'
colsFormat['character varying'] = 'string'
colsFormat['date'] = 'Date'
colsFormat['numeric'] = 'number'
colsFormat['timestamp with time zone'] = 'Date'
colsFormat['timestamp'] = 'Date'
colsFormat['time'] = 'Date'
colsFormat['boolean'] = 'boolean'
colsFormat['json'] = 'JSON'
colsFormat['text'] = 'string'
colsFormat['timestamp without time zone'] = 'Date'
colsFormat['double precision'] = 'number'
colsFormat['bigint'] = 'number'
colsFormat['real'] = 'number'

let fields = []

inquirer.prompt([
	{
		type: 'list',
		name: 'action',
		message: '¿Qué desea Generar?',
		choices: [
			'Componente',
		],
	},
	{
		type: 'Esquema',
		name: 'schema',
		message: 'Esquema',
	},
	{
		type: 'Tabla',
		name: 'table',
		message: 'Nombre de la tabla',
	},
])
	.then(answer => {
		answers = answer
		assignGenerate(answer.action)
	});




async function assignGenerate(action) {
	const exception = ['Componente', 'Entity']
	// const folder = path.split('/').pop()


	let entity
	if (exception.includes(action)) {
		answers.entity = await validAction()
	}
	createFolder()
	switch (action) {
		case 'Componente':
			await structureModel()
			createEntity()
			createMiddleware()
			createModulo()
			break;

		default:
			break;
	}
}

async function validAction() {
	return await inquirer.prompt([
		{
			type: 'Input',
			name: 'entity',
			message: '¿Nombre Entity?',
		}
	]).then(answer => {
		return answer.entity
	})
}


function createFolder() {
	if (!fs.existsSync(`${dir}${answers.schema}`)) {
		fs.mkdirSync(`${dir}${answers.schema}`);
		console.log('✍ ' + magenta(`Carpeta Creada: src/${answers.schema}`) + green('✔'));
	}
	if (!fs.existsSync(`${dir}${answers.schema}/${Remplace(answers.table)}`)) {
		fs.mkdirSync(`${dir}${answers.schema}/${Remplace(answers.table)}`);
		console.log('✍ ' + magenta(`Carpeta Creada: src/${answers.schema}/${Remplace(answers.table)}`) + green('✔'));
	}
}

function createEntity() {

	const pathfile = `${dir}${answers.schema}/${Remplace(answers.table)}`
	fs.writeFile(`${pathfile}/${Remplace(answers.entity)}.entity.ts`,
		`import { Table, Model, Column, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript'

@Table({
	schema: '${answers.schema}',
	tableName: '${answers.table}',
})

export class ${MaysPrimera(answers.entity)} extends Model<${MaysPrimera(answers.entity)}> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number
${entityFields()}

	@CreatedAt
	createdAt: Date

	@UpdatedAt
	updatedAt: Date
}
	 `,
		function (err) {
			if (err) throw err;
			console.log('✌ ' + magenta(`Entity Creado: ${pathfile}/${Remplace(answers.table)}.entity.ts `) + green('✔'));
		});
}

function entityFields() {
	let html = ''
	for (let field of fields) {
		html += `
	${field.column}
	${field.field}
			`
	}
	return html
}


async function structureModel() {
	var pgStructure = require('pg-structure');

	const config = {
		database: 'practicantes',
		user: 'postgres',
		password: 'bdaserti',
		host: '198.74.59.59',
		port: 5432
	}

	await pgStructure(config, [answers.schema])
		.then((db) => {
			var cols = db.schemas.get(answers.schema).tables.get(answers.table).columns
			for (let col of cols.values()) {
				const type = colsFormat[col.type]
				if (col.name !== 'id' && col.name !== 'createdAt' && col.name !== 'updatedAt') {
					fields.push({
						column: column(type),
						field: `${col.name}: ${type}`
					})
				}
			}

		})
		.catch(err => console.log(err.stack));
}

function column(typeColumn) {
	switch (typeColumn) {
		case 'JSON':
			return '@Column({ type: DataType.JSON })'
			break;
		default:
			return '@Column'
			break;
	}
}

function createMiddleware() {
	const pathfile = `${dir}${answers.schema}/${Remplace(answers.table)}`
	fs.writeFile(`${pathfile}/${Remplace(answers.table)}.middleware.ts`,
		`import { Injectable, NestMiddleware, Inject } from '@nestjs/common'
import { CommonFunctionsService } from '../../common/common-functions.service'
import { Sequelize } from 'sequelize-typescript'

@Injectable()
export class ${MaysPrimera(answers.table)}Middleware implements NestMiddleware {

	constructor(
		private readonly commonService: CommonFunctionsService,
		@Inject('Sequelize') private sequelize: Sequelize
		){}

		use(req: any, res: any, next: () => void) {
			const model = this.sequelize.models.${MaysPrimera(answers.entity)}
	
			if (model) {
				this.commonService.model = model
				next()
			} else {
				res.send({ status: false, error: 'Modelo no Definido' })
			}
		}
}


	 `,
		function (err) {
			if (err) throw err;
			console.log('✌ ' + magenta(`Service Creado: src/${pathfile}/${Remplace(answers.table)}.middleware.ts `) + green('✔'));
		});
}

function createModulo() {
	const pathfile = `${dir}${answers.schema}/${Remplace(answers.table)}`
	fs.writeFile(`${pathfile}/${Remplace(answers.table)}.module.ts`,
		`import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { CommonFunctionsController } from '../../common/common-functions.controller'
import { CommonModule } from '../../common/common.module'
import { ${MaysPrimera(answers.table)}Middleware } from './${Remplace(answers.table)}.middleware'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ${MaysPrimera(answers.schema)}${MaysPrimera(answers.table)}Module implements NestModule {
	configure(consumer: MiddlewareConsumer) {
    consumer.apply(${MaysPrimera(answers.table)}Middleware).forRoutes('${answers.schema}/${Remplace(answers.table)}')
  }
}
	 `,
		function (err) {
			if (err) throw err;
			console.log('✌ ' + magenta(`Modulo Creado: src/${pathfile}/${Remplace(answers.table)}.module.ts `) + green('✔'));
		});
}


function MaysPrimera(string) {
	const name = string.split('_')
	let newString = ''
	name.forEach(element => {
		newString += element.charAt(0).toUpperCase() + element.slice(1);
	});

	return newString
}

function Remplace(string) {
	const newString = string.replace("_", "-")
	return newString
}