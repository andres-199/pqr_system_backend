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

  return { magenta, green };
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
  const dbConfig = require('../common/constants.ts');

  pgStructure(dbConfig, [nameSchema]).then(db => {
    createFolderShema(nameSchema);

    const tables = db.schemas.get(nameSchema).tables;

    for (const table of tables.values()) {
      createFolderTable(nameSchema, table.name);
      createService(table.name);
    }
  });
}

function createService(tableName) {
  var source = fs.readFileSync(
    'src/base-nest/tamplate-nest/middleware.html',
    'utf8',
  );
  var template = Handlebars.compile(source);

  const name = namePrimaryMayus(tableName);
  const singular = singularword(name);
  console.log(singular);

  // const data = { name: name, fileName: filName, pluralName: pluralName}
  // var content   = template(data)

  // const tmpFolder = pluralizeModel(filName, false)

  // verifyFolderExists(folder + tmpFolder)
  // fs.writeFile(
  // folder + tmpFolder + '/' + tmpFolder + '.service.ts',
  // content,
  //   (err: any) => {
  //     console.log(err)
  //   }
  // )
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
