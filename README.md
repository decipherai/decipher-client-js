<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://framerusercontent.com/images/5m32ARh2jqZzo3fXEjXSG0jYFM.png?scale-down-to=200">
  <source media="(prefers-color-scheme: light)" srcset="https://framerusercontent.com/images/5m32ARh2jqZzo3fXEjXSG0jYFM.png?scale-down-to=200">
  <a href ="https://getdecipher.com">
	  <img alt="Decipher Logo" src="https://framerusercontent.com/images/5m32ARh2jqZzo3fXEjXSG0jYFM.png?scale-down-to=200">
  </a>
</picture>

### AI-Powered Error Monitoring and Debugging

[![Docs](https://img.shields.io/badge/docs-prod.getdecipher.com/docs-3F16E4)](https://prod.getdecipher.com/docs) [![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

  <p align="center">
    <a href="https://prod.getdecipher.com/docs">Documentation</a>
    ·
    <a href="https://getdecipher.com">Website</a>
  </p>

</div>

## Docs

To integrate Decipher into your Next.js or Express application, please follow the steps at https://prod.getdecipher.com/docs

## Examples

### Express

First install the package:

```
npm install @decipher-sdk/express@latest
```

Then use the following in your project. Make sure to keep the order that you use the middleware in your app.

```javascript
// ...other imports
import { DecipherRequestHandler, DecipherErrorHandler } from '@decipher-sdk/express';

const app = express();
// IMPORTANT: The DecipherRequestHandler must be the first middleware on the app.
app.use(DecipherRequestHandler({
   // A codebase name of your choice to identify errors in Decipher.
   codebase_id: "CODEBASE_NAME_OF_MY_CHOICE",
   customer_id: "MY_CUSTOMER_ID_FROM_STEP_1"
}));

// Your controllers
app.get("/", ...)
app.get("/submit", ...)
// IMPORTANT: The error handler must be immediately after the controllers.
app.use(DecipherErrorHandler)
```
