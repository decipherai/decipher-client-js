import { NextResponse } from "next/server";
import Decipher from "@decipher-sdk/nextjs";

Decipher.init({
  codebaseId: "app_router_example_vercel",
  customerId: "39cd095b-4762-40ab-a129-fdeb6bff6953"
});


function secondFunc() {
  var loo = { aaa: "LOL" };
}
function firstFunc() {
  const swagger = 6;
  const coolio = { "5": "a" };
  const arr = [1, 6, 8];
  const swagaaaaa = null;
  const wax = "hi how arey ou";
  console.log(swagger, coolio, wax, arr, swagaaaaa);
  secondFunc();
}

async function handler(req: Request) {
  console.log('starting delay')
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 second delay
  firstFunc();
  console.log("post goodbye handler invoked");

  const undefinedObject: any = undefined;
  //console.log(undefinedObject.someProperty); // This will cause a runtime error
  const body = await req.json();
  console.log("The request just got the body: ", body);
  
  return NextResponse.json({ error: "NEW RELIC" }, { status: 505 });
}

function myFunction() {
  anotherFunction();
}

function anotherFunction() {
  throw Error();
}

export const POST = Decipher.withDecipher(handler, {
  codebaseId: "app_router_example_vercel",
  customerId: "39cd095b-4762-40ab-a129-fdeb6bff6953"
});

// import { NextResponse } from "next/server";
// import Decipher from '@decipher-sdk/nextjs';

// Decipher.init({
//   codebaseId: "app_router_refactor_example",
//   customerId: "39cd095b-4762-40ab-a129-fdeb6bff6953"
// });

// function secondFunc() {
//   var loo = { aaa: "LOL" };
// }

// function firstFunc() {
//   const swagger = 6;
//   const coolio = { "5": "a" };
//   const arr = [1, 6, 8];
//   const swagaaaaa = null;
//   const wax = "hi how arey ou";
//   console.log(swagger, coolio, wax, arr, swagaaaaa);
//   secondFunc();
// }

// async function handler(req: Request) {
//   console.log("doing some math");
//   firstFunc();
//   console.log("post goodbye handler invoked");
//   const body = await req.json();
//   console.log("The request just got the body: ", body);

//   const undefinedObject: any = undefined;
//   //console.log(undefinedObject.someProperty); // This will cause a runtime error

//   return NextResponse.json({ error: "NEW RELIC" }, { status: 505 });
// }

// export const POST = Decipher.withDecipher(handler);
