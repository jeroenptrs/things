import { serve } from "./deps.ts";

async function srv() {
  const server = serve({ port: 8000 as number });
  console.log("http://localhost:8000/");
  for await (const req of server) {
    const name = req.url.split("?")[0].split("/")[1];
    req.respond({ body: `Hello, ${!!name ? name : "World"}!` });
  }
}

srv();
