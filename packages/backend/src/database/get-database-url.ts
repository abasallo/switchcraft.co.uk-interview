export const getDatabaseUrl = (): string => {
  return process.env.MONGO_URL ?? "mongodb://mongodb:27017";
};

