import { MongoClient } from "mongodb";
import { getDatabaseUrl } from "./get-database-url";

let client: MongoClient | undefined = undefined;

export const getDatabaseClient = async (): Promise<MongoClient | undefined> => {
  if (client) {
    return client;
  }
  client = new MongoClient(
    getDatabaseUrl(),
    { useUnifiedTopology: true }
  );
  await client.connect();

  process.on("SIGINT", (): void => {
    if (!client) {
      return;
    }
    const exitCode = 0;
    client.close()
      .then(() => process.exit(exitCode))
      .catch(() => process.exit(exitCode));
  });

  return client;
};

