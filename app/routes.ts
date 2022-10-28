import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { encryptPDF } from './controllers/pdfs';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);
  app.post('/encrypt', encryptPDF);
};
