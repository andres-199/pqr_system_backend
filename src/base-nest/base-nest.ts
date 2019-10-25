// import { sequelizeProvider } from '../common/sequelize.provider';
const pgStructure = require('pg-structure');
const Handlebars = require('handlebars');
const pluralize = require('pluralize');
var dir = './src/';
var inquirer = require('inquirer');
var fs = require('fs');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: '¿Qué desea Generar?',
      choices: ['Componente', 'Esquema'],
    },
  ])
  .then(answer => {
    if (answer.action === 'Esquema') {
      esquema();
    }
  });

function esquema() {
  inquirer
    .prompt([
      {
        type: 'Esquema',
        name: 'schema',
        message: 'Nombre del esquema',
      },
    ])
    .then(answer => {
      structureModelEsquema(answer.schema);
    });
}

function colors() {
  const chalk = require('chalk');
  const magenta = chalk.bold.magenta;
  const green = chalk.bold.green;
  const yellow = chalk.bold.yellow;

  return { magenta, green, yellow };
}

function dataStructureFields() {
  const colsFormat = [];
  colsFormat['smallint'] = 'number';
  colsFormat['integer'] = 'number';
  colsFormat['character'] = 'string';
  colsFormat['character varying'] = 'string';
  colsFormat['date'] = 'Date';
  colsFormat['numeric'] = 'number';
  colsFormat['timestamp with time zone'] = 'Date';
  colsFormat['timestamp'] = 'Date';
  colsFormat['time'] = 'Date';
  colsFormat['boolean'] = 'boolean';
  colsFormat['json'] = 'JSON';
  colsFormat['text'] = 'string';
  colsFormat['timestamp without time zone'] = 'Date';
  colsFormat['double precision'] = 'number';
  colsFormat['bigint'] = 'number';
  colsFormat['real'] = 'number';

  return colsFormat;
}

function structureModelEsquema(nameSchema) {
  const config = {
    database: 'yonarp',
    user: 'postgres',
    password: 'bdaserti',
    host: '198.74.59.59',
    port: 5432,
  };

  pgStructure(config, [nameSchema]).then(db => {
    createFolderShema(nameSchema);

    const tables = db.schemas.get(nameSchema).tables;

    for (let table of tables.values()) {
      createFolderTable(nameSchema, table.name);
			createMiddlewares(nameSchema, table.name);
			createModulos(nameSchema, table.name);
    }
  });
}

function createMiddlewares(nameSchema, tableName) {
  var source = fs.readFileSync(
    'src/base-nest/tamplate-nest/middleware.html',
    'utf8',
  );
  var template = Handlebars.compile(source);

  const nameService = namePrimaryMayus(tableName);
  const nameEntity = singularword(nameService);

  const data = { nameService, nameEntity: nameEntity };
  var content = template(data);

  const folder = `${dir}${nameSchema}/${nameFolders(tableName)}/${nameFolders(
    tableName,
  )}.middleware.ts`;
	
	if(verifyFolderExists(folder)) { return }
  fs.writeFile(folder, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        colors().yellow(
          `--- Middleware Creado: src/${nameSchema}/${nameFolders(
            tableName,
          )}/${nameFolders(tableName)}.middleware.ts`,
        ) + colors().green('✔'),
      );
    }
  });
}

function createModulos(nameSchema, tableName) {
  var source = fs.readFileSync(
    'src/base-nest/tamplate-nest/module.html',
    'utf8',
  );
  var template = Handlebars.compile(source);

	const nameModule = namePrimaryMayus(tableName);
	const pathRouter = `${nameSchema}/${tableName}`
  const from = tableName
  const data = { nameModule, pathRouter, from };
  var content = template(data);

  const folder = `${dir}${nameSchema}/${nameFolders(tableName)}/${nameFolders(
    tableName,
  )}.module.ts`;
	
	if(verifyFolderExists(folder)) { return }
  fs.writeFile(folder, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        colors().yellow(
          `--- Modulo Creado: src/${nameSchema}/${nameFolders(
            tableName,
          )}/${nameFolders(tableName)}.module.ts`,
        ) + colors().green('✔'),
      );
    }
  });
}

function verifyFolderExists(path) {
  if (fs.existsSync(`${path}`)) {
    return true;
  }

  return false;
}

function singularword(name) {
  let singular;
  if (!name.split('es').pop()) {
    singular = name.substring(0, name.length - 2);
  }

  if (!name.split('s').pop() && !singular) {
    singular = name.substring(0, name.length - 1);
  }
  return singular;
}

/**
 * Crea la carpeta principal
 * @param nameSchema
 */
function createFolderShema(nameSchema) {
  if (!fs.existsSync(`${dir}${nameSchema}`)) {
    fs.mkdirSync(`${dir}${nameSchema}`);
    console.log(
      '✍ ' +
        colors().magenta(`Carpeta Creada: src/${nameSchema}`) +
        colors().green('✔'),
    );
  }
}

/**
 *  Crea las subcarpetas
 * @param nameSchema
 * @param nameTable
 */
function createFolderTable(nameSchema, nameTable) {
  if (!fs.existsSync(`${dir}${nameSchema}/${nameFolders(nameTable)}`)) {
    fs.mkdirSync(`${dir}${nameSchema}/${nameFolders(nameTable)}`);
    console.log(
      '✍ ' +
        colors().magenta(
          `Carpeta Creada: src/${nameSchema}/${nameFolders(nameTable)}`,
        ) +
        colors().green('✔'),
    );
  }
}

/**
 * cambiar el nombre de la base de datos
 * ejemplo roles_user = RolesUser
 * @todo
 */
function namePrimaryMayus(string) {
  const name = string.split('_');
  let newString = '';
  name.forEach(element => {
    newString += element.charAt(0).toUpperCase() + element.slice(1);
  });

  return newString;
}

/**
 * cambiar el nombre de la base de datos
 * ejemplo roles_user = roles-user
 * @todo
 */
function nameFolders(string) {
  const newString = string.replace('_', '-');
  return newString;
}
