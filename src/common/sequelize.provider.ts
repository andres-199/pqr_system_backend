import { Sequelize, Model } from 'sequelize-typescript';

function _getModels(path = 'src') {
  const models = [];
  const fs = require('fs');
  const dirs: string[] = fs.readdirSync(path);

  for (const dir of dirs) {
    const newPath = `${path}/${dir}`;
    const isDirectory = fs.lstatSync(newPath).isDirectory();

    if (isDirectory) {
      models.push(..._getModels(newPath));
    } else {
      const isEntity = dir.includes('entity');

      if (isEntity) {
        const model = require(newPath.replace('src/', '../'));

        for (const instance in model) {
          if (model.hasOwnProperty(instance)) {
            models.push(model[instance]);
          }
        }
      }
    }
  }

  return models;
}

export const sequelizeProvider = {
  provide: 'Sequelize',
  useFactory: async () => {
    const sequelize = new Sequelize({
			dialect: 'postgres',
			host: '198.74.59.59',
			port: 5432,
			username: 'postgres',
			password: 'bdaserti',
			database: 'practicantes',
			models: _getModels(),
		});
    return sequelize;
  },
};
