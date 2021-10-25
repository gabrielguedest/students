import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config();

const getEnv = (name: string) => {
  const env = process.env[name];

  if (!env) {
    throw new Error(`Missing ${name} env value`);
  }

  return env;
}

export interface Config {
  isProduction: boolean
  dbHost: string
  dbPort: number
  dbUser: string
  dbPassword: string
  dbName: string
}

export const config: Config = {
  isProduction: getEnv("NODE_ENV") === 'production',
  dbHost: getEnv("DB_HOST"),
  dbPort: +getEnv("DB_PORT"),
  dbUser: getEnv("DB_USER"),
  dbPassword: getEnv("DB_PASSWORD"),
  dbName: getEnv("DB_NAME"),
}