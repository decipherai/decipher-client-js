<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://framerusercontent.com/images/5m32ARh2jqZzo3fXEjXSG0jYFM.png?scale-down-to=200">
  <source media="(prefers-color-scheme: light)" srcset="https://framerusercontent.com/images/5m32ARh2jqZzo3fXEjXSG0jYFM.png?scale-down-to=200">
  <a href ="https://getdecipher.com">
	  <img alt="Decipher Logo" src="https://framerusercontent.com/images/5m32ARh2jqZzo3fXEjXSG0jYFM.png?scale-down-to=200">
  </a>
</picture>

### AI-Powered Error Monitoring and Debugging

[![Docs](https://img.shields.io/badge/docs-docs.getdecipher.com-3F16E4)](https://docs.getdecipher.com) [![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

  <p align="center">
    <a href="https://docs.getdecipher.com">Documentation</a>
    ·
    <a href="https://getdecipher.com">Website</a>
  </p>

</div>

## Docs

To integrate Decipher into your Next.js or Express application, please follow the steps at https://docs.getdecipher.com

## Examples

### NextJS

First install the package:

```bash
npm install @decipher-sdk/nextjs
```

Then update your NextConfig using `withDecipherConfig`.

```typescript
/** @type {import('next').NextConfig} */
import { withDecipherConfig } from "@decipher-sdk/nextjs";

const nextConfig = {
  // ...your existing NextConfig
};

export default withDecipherConfig(nextConfig, {
  apiKey: "YOUR_DECIPHER_API_KEY", // From the https://app.getdecipher.com/settings page.
  customerId: "YOUR_CUSTOMER_ID", // From the https://app.getdecipher.com/settings page.
  frontendCodebaseId: "YOUR_FRONTEND_CODEBASE_NAME", // You pick this name to group your frontend errors.
});
```

If you have another function that computes your config (e.g. withSentryConfig) have the withDecipherConfig wrap that.

Decipher will now automatically capture frontend errors and session replays, as well as upload production sourcemaps upon new releases of your app and include source code in your error stack traces.

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
