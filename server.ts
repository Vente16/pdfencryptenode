/* eslint-disable no-undef */
import { createServer } from 'http';

import app from './app';
import config from './config';

const defaultPort = 3000;

const port = config.common.api.port || defaultPort;

Promise.resolve()
  .then(() => {
    const server = createServer(app);

    server.listen(port);

    // logger.info(`Listening on port: ${port}`);
  })
  .catch((error: Error) => console.error(error.stack));
