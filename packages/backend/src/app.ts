import express from "express";
import { appLogger } from "./app-logger";
import { handleApiErrors } from "./handle-error";
import { getBigGreenEnergyDeals } from "./deals/big-green-energy-deals/get-big-green-energy-deals";
import type { FrontendDealsResponse } from "@switchcraft-interview/shared-models";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  appLogger.trace({
    url: req.url,
    body: req.body as {},
    params: req.params,
    query: req.query
  }, "Got request");
  next();
});

app.get<undefined, FrontendDealsResponse>("/deals", async (req, res) => {
  const deals = await getBigGreenEnergyDeals();
  return res.json({
    deals
  });
});

app.use(handleApiErrors);

export { app };
