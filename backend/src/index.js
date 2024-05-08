import express from "express";
import { cors } from "./middleware/cors.js";
import api from "./controllers/api.js";

async function main() {
  const app = express();
  const port = 3000;

  app.use(cors);

  app.get("/health", (_, res) => {
    res.set("Cache-Control", "no-cache").json({ status: "ok" });
  });

  app.use("/api", api);

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
}

main();
