type ENV_VAR = string | undefined;

type dialect = 'postgres' | 'mysql' | 'sqlite' | 'mssql' | 'oracle';

interface ICorsConfig {
  credentials: boolean;
}

export interface IConfig {
  isDevelopment?: boolean;
  isProduction?: boolean;
  isTesting?: boolean;
  environment: string;
  common: {
    logs: {
      logging: boolean;
    };
    api: {
      bodySizeLimit?: ENV_VAR;
      parameterLimit?: ENV_VAR;
      port: ENV_VAR;
    };
  };
  cors: {
    server: ICorsConfig;
  };
}
