// import { sequelizeProvider } from '../common/sequelize.provider';
const pgStructure = require('pg-structure');
const Handlebars = require('handlebars');
const pluralize = require('pluralize');
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

function structureModelEsquema(schema) {
  const config = {
    database: 'yonarp',
    user: 'postgres',
    password: 'bdaserti',
    host: '198.74.59.59',
    port: 5432,
  };

  pgStructure(config, [schema]).then(db => {
    const tables = db.schemas.get(schema).tables;
		for (let table of tables.values()) {
			
		}
    console.log(tables);
  });
}

/**
 * cambiar el nombre de la base de datos
 * ejemplo roles_user = RolesUser
 * @todo
 */
function nameEntityControllerMidelware(string) {
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
