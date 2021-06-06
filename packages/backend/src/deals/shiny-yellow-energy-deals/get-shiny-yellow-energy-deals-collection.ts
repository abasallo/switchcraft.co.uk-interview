import type { ShinyYellowEnergyDeal } from "@switchcraft-interview/shared-models";
import { Collection } from "mongodb";
import { getDatabase } from "../../database/get-database";

export const getDbShinyYellowEnergyCollection
  = async (): Promise<Collection<ShinyYellowEnergyDeal>> => {
    const db = await getDatabase();
    if (!db) {
      throw new Error("Cannot find database");
    }
    return db.collection<ShinyYellowEnergyDeal>("shinyYellowEnergyDeals");
  };
