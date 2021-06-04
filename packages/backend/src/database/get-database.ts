import type { Db } from "mongodb";
import { getDatabaseClient } from "./get-database-client";

export const getDatabase = async (): Promise<Db | undefined> => {
  const database = await getDatabaseClient();
  if (!database) {
    return;
  }
  return database.db("interview");
};
