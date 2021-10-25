import { ConnectionOptions, createConnection } from "typeorm";
import { Config } from "../config";

export const databaseConnection = async (config: Config) => {
  const dbConfig: ConnectionOptions = {
    type: "postgres",
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    synchronize: true,
    logging: false,
    entities: ["{dist,src}/**/*.entity{.ts,.js}"],
  }

  return await createConnection(dbConfig);
}