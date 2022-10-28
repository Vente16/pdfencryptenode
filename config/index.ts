import logger from '../app/logger';

import { IConfig } from '../types/config';
import { DeepPartial } from '../types/utils';

const ENVIRONMENT: string = process.env.ENVIROMENT_S || 'development';

if (ENVIRONMENT !== 'production') {
  require('dotenv').config(); // eslint-disable-line global-require
}

const configFile = `./${ENVIRONMENT}`;
const environmentConfig = require(configFile).config;

const isObject = (variable: unknown): boolean => variable instanceof Object;

/*
 * Deep immutable copy of source object into tarjet object and returns a new object.
 */
const deepMerge = (target: IConfig, source: DeepPartial<IConfig>): IConfig => {
  if (isObject(target) && isObject(source)) {
    return Object.keys(source).reduce(
      (output: IConfig, key: string) => ({
        ...output,
        [key]: isObject(source[key]) && key in target ? deepMerge(target[key], source[key]) : source[key]
      }),
      { ...target }
    );
  }
  return target;
};

const config: IConfig = {
  environment: ENVIRONMENT,
  common: {
    logs: {
      logging: logger.info
    },
    api: {
      bodySizeLimit: process.env.API_BODY_SIZE_LIMIT,
      parameterLimit: process.env.API_PARAMETER_LIMIT,
      port: process.env.PORT
    }
  },
  cors: {
    server: {
      credentials: true
    }
  }
};

const customConfig: IConfig = deepMerge(config, environmentConfig);

export default customConfig;
