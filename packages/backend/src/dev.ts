import { app } from "./app";
import { appLogger } from "./app-logger";

const defaultPort = 4000;
const port = process.env.PORT ?? defaultPort;

app.listen(port, () => {
  appLogger.info({ port }, "App started");
});
