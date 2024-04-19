
import { NextRequest, NextResponse } from "next/server";
import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import Decipher from "@decipher-sdk/nextjs";

Decipher.init({
  codebaseId: "app_router_refactor_example",
  customerId: "39cd095b-4762-40ab-a129-fdeb6bff6953"
});

const handler = (req: NextRequest) => {
  fetchRequestHandler({
    endpoint: "/api/testy",
    req,
    router: appRouter,
    createContext: () => ({}),
  });  
  // Your logic to print numbers 1-10
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  throw new Error("OMG");
  return NextResponse.json({ error: 'TRPC ERROR' }, { status: 503 });
};

const h3 = Decipher.withDecipher(handler, {
  codebaseId: "app_router_example_vercel",
  customerId: "39cd095b-4762-40ab-a129-fdeb6bff6953",
});
export { h3 as GET, h3 as POST };

// import { NextRequest, NextResponse } from "next/server";
// import { appRouter } from "@/server";
// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// import Decipher from '@decipher-sdk/nextjs';

// Decipher.init({
//   codebaseId: "app_router_refactor_example",
//   customerId: "39cd095b-4762-40ab-a129-fdeb6bff6953"
// });

// const handler = (req: NextRequest) => {
//   fetchRequestHandler({
//     endpoint: "/api/testy",
//     req,
//     router: appRouter,
//     createContext: () => ({}),
//   });  
//   // Your logic to print numbers 1-10
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
//   throw new Error("OMG");

//   return NextResponse.json({ error: 'TRPC ERROR' }, { status: 503 });
// };

// const h3 = Decipher.withDecipher(handler)
// export { h3 as GET, h3 as POST };
