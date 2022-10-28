
# Encryptpdf NodeJS

Small proyect to encrypt pdf files with [multiparty](https://github.com/pillarjs/multiparty) and [encrypt-decrpt-pdf](https://github.com/FemiOfficial/Encrypt-Decrypt-PDF-Nodejs) libraries


## Typescript

If you do not have typescript installed run this

```bash
npm install -g typescript
```


## Run the project 🚀


```bash
npm install or yarn install
```

Then:
```bash
npm run dev or yarn dev
```

## 👉 Usage
### POST /encrypt
Endpoint to generate a PDF encrypted

👀 When you have done the request to the EP see folder called **docs**

**Parameters**

|    NAME       |  TYPE   | DESCRIPTION         |
| -------------:|:-------:| --------------------|
|     `pdf`     |  file   | PDF file to encrypt |

**Response**

```
{
    "message": "The file has been encrypted successful",
    "internalCode": "success_operation",
    "statusCode": 200
}
```

