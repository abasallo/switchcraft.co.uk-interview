import type { BigGreenEnergyDeal } from "@switchcraft-interview/shared-models";
import { Collection } from "mongodb";
import { getDatabase } from "../database/get-database";

export const getDbBigGreenEnergyCollection
  = async (): Promise<Collection<BigGreenEnergyDeal>> => {
    const db = await getDatabase();
    if (!db) {
      throw new Error("Cannot find database");
    }
    return db.collection<BigGreenEnergyDeal>("bigGreenEnergyDeals");
  };
