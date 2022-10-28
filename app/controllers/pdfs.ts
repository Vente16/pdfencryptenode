import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import multiparty from 'multiparty';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: Unreachable code error
import { PDFProcessor } from 'encrypt-decrpt-pdf';

import { badRequest, defaultError, externalApiError, successOperation } from '../errors';

export function encryptPDF(req: Request, res: Response): void {
  const pathDir = 'docs';
  const form = new multiparty.Form({ uploadDir: pathDir });
  // eslint-disable-next-line @typescript-eslint/typedef
  form.parse(req, (err, _, files) => {
    if (err) {
      const { message } = err;
      const isNotFile = message === 'missing content-type header';
      const statusCode = isNotFile ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR;
      const responseMessage = isNotFile
        ? badRequest(message)
        : defaultError('It has occurred an internal error');
      res.status(statusCode).send(responseMessage);
    } else {
      const { pdf = null } = files;
      const { path: pathPdf } = pdf[0];
      const password = 'testpassword';
      const username = 'testusername';
      const pdfEncryptedName = `${pathDir}/mypdfencrypted.pdf`;

      const processor = new PDFProcessor(password, username);
      processor
        .encrypt(pathPdf, pdfEncryptedName)
        .then(() => {
          res.status(HttpStatus.OK).send({ message: 'The file has been encrypted successful[]' });
        })
        .catch(({ error }: { error: boolean; message: string }) => {
          const statusCode = error ? HttpStatus.NOT_FOUND : HttpStatus.OK;
          const message = error
            ? externalApiError('It has occurred an error encrypting the file')
            : successOperation('The file has been encrypted successful');

          res.status(statusCode).send(message);
        });
    }
  });
}
