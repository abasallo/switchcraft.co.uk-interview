import request from "supertest";
import express from "express";
import { app } from "../app";
import { FrontendDealsResponse } from "@switchcraft-interview/shared-models";
import { MongoClient } from "mongodb";

const wrapper = express();
wrapper.use("/", app);

const dealsUrl = "/deals";

describe("deals endpoint", () => {
  let result: FrontendDealsResponse;
  let connection: MongoClient;

  const initDatabase = async (): Promise<void> => {
    connection = await MongoClient.connect(
      process.env.MONGO_URL!,
      {
        useNewUrlParser: true
      }
    );
    const db = await connection.db("interview");
    await db.collection("bigGreenEnergyDeals").insertMany([
      {
        name: "Fixed Green Deal",
        supplierName: "Big Green Energy",
        annualCost: 450,
        isGreenEnergy: true,
        durationMonths: 12,
        logo: "<svg></svg>"
      },
      {
        name: "Big Green Deal",
        supplierName: "Big Green Energy",
        annualCost: 500,
        isGreenEnergy: true,
        logo: "<svg></svg>"
      }
    ]);
    await db.collection("shinyYellowEnergyDeals").insertMany([
      {
        name: "Shiny Forever",
        monthlyCost: 50,
        green: false,
        logo: "<svg></svg>"
      },
      {
        name: "Shiny 5000",
        monthlyCost: 30,
        green: true,
        duration: "18",
        logo: "<svg></svg>"
      }
    ]);
  };

  beforeAll(async () => {
    await initDatabase();
    const { body } = await request(wrapper).get(dealsUrl);
    result = body;
  });

  afterAll(async () => {
    await connection.close();
  });

  test("returns the expected result", () => {
    expect(result).toMatchSnapshot();
  });

});
