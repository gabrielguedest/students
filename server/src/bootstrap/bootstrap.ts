import express from 'express';
import { Config } from '../config';
import { apolloServer } from './apollo-server';
import { databaseConnection } from './database';
import cors from 'cors';

const bootstrap = async (config: Config) => {
  const app = express();
  app.use(cors())

  await databaseConnection(config);

  await apolloServer(app, config.isProduction);

  app.listen(9000, () => {
    console.log(`Server running on port 9000`);
  })
}

export default bootstrap;