const pgStructure = require('pg-structure');
const Handlebars = require('handlebars');
const pluralize = require('pluralize');
const dir = './src/';
const inquirer = require('inquirer');
const fs = require('fs');

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
  const constants = require('../common/constants.ts');
  const dbConfig = constants.dbConfig;

  pgStructure(dbConfig, [nameSchema]).then(db => {
    createFolderShema(nameSchema);
    const nameTables = [];
    const tables = db.schemas.get(nameSchema).tables;

    for (const table of tables.values()) {
      nameTables.push({ path: table.name, name: namePrimaryMayus(table.name) });
      createFolderTable(nameSchema, table.name);
      createMiddlewares(nameSchema, table.name);
      createSubModulos(nameSchema, table.name);
    }

    createModuloPrincipal(nameSchema, nameTables);
    routerPrincipal(nameSchema, nameTables);
  });
}

function createEntity() {
  return;
}

/**
 * Crea el router principal
 * @param nameSchema, nombre del esquema
 * @param namesTables, nombre de las tablas
 */
function routerPrincipal(nameSchema, namesTables) {
  const source = fs.readFileSync(
    'src/base-nest/tamplate-nest/router.html',
    'utf8',
  );
  const template = Handlebars.compile(source);

  const nameModule = namePrimaryMayus(nameSchema);
  const data = { nameModule, modulos: namesTables };
  const content = template(data);

  const folder = `${dir}${nameSchema}/${nameFolders(nameSchema)}.router.ts`;

  if (verifyFolderExists(folder)) {
    return;
  }
  fs.writeFile(folder, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        colors().yellow(
          `--- Router Creado: src/${nameSchema}/${nameFolders(
            nameSchema,
          )}.router.ts`,
        ) + colors().green('✔'),
      );
    }
  });
}

/**
 * Crea el modulo principal
 * @param nameSchema, nombre del esquema
 * @param namesTables, nombre de las tablas
 */
function createModuloPrincipal(nameSchema, namesTables) {
  const source = fs.readFileSync(
    'src/base-nest/tamplate-nest/module.html',
    'utf8',
  );
  const template = Handlebars.compile(source);

  const nameModule = namePrimaryMayus(nameSchema);
  const data = { nameModule, modulos: namesTables };
  const content = template(data);

  const folder = `${dir}${nameSchema}/${nameFolders(nameSchema)}.module.ts`;

  if (verifyFolderExists(folder)) {
    return;
  }
  fs.writeFile(folder, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        colors().yellow(
          `--- Modulo Creado: src/${nameSchema}/${nameFolders(
            nameSchema,
          )}.module.ts`,
        ) + colors().green('✔'),
      );
    }
  });
}

/**
 *
 * @param nameSchema, nombre de la esquema
 * @param tableName, nombre de la tabla
 */
function createMiddlewares(nameSchema, tableName) {
  const source = fs.readFileSync(
    'src/base-nest/tamplate-nest/middleware.html',
    'utf8',
  );
  const template = Handlebars.compile(source);

  const nameService = namePrimaryMayus(tableName);
  const nameEntity = singularword(nameService);

  const data = { nameService, nameEntity };
  const content = template(data);

  const folder = `${dir}${nameSchema}/${nameFolders(tableName)}/${nameFolders(
    tableName,
  )}.middleware.ts`;

  if (verifyFolderExists(folder)) {
    return;
  }
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

/**
 *
 * @param nameSchema, nombre de la esquema
 * @param tableName, nombre de la tabla
 */
function createSubModulos(nameSchema, tableName) {
  const source = fs.readFileSync(
    'src/base-nest/tamplate-nest/sub-module.html',
    'utf8',
  );
  const template = Handlebars.compile(source);

  const nameModule = namePrimaryMayus(tableName);
  const pathRouter = `${nameSchema}/${tableName}`;
  const from = tableName;
  const data = { nameModule, pathRouter, from };
  const content = template(data);

  const folder = `${dir}${nameSchema}/${nameFolders(tableName)}/${nameFolders(
    tableName,
  )}.module.ts`;

  if (verifyFolderExists(folder)) {
    return;
  }
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

function createService(tableName) {
  const source = fs.readFileSync(
    'src/base-nest/tamplate-nest/middleware.html',
    'utf8',
  );
  const template = Handlebars.compile(source);

  const name = namePrimaryMayus(tableName);
  const singular = singularword(name);
  console.log(singular);

  // const data = { name: name, fileName: filName, pluralName: pluralName}
  // const content   = template(data)

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
 *  verifica si exite una ruta
 * @param path, string
 */
function verifyFolderExists(path) {
  if (fs.existsSync(`${path}`)) {
    return true;
  }

  return false;
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
function namePrimaryMayus(name: string) {
  const _name = name.split('_');
  let newString = '';
  _name.forEach(element => {
    newString += element.charAt(0).toUpperCase() + element.slice(1);
  });

  return newString;
}

/**
 * cambiar el nombre de la base de datos
 * ejemplo roles_user = roles-user
 * @todo
 */
function nameFolders(name: string) {
  const newString = name.replace('_', '-');
  return newString;
}
