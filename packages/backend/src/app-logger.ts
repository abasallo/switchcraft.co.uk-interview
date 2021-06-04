import { createLogger, stdSerializers } from "bunyan";
import type { LogLevel, Stream } from "bunyan";
import type Logger from "bunyan";
import type { Writable } from "stream";

const prettyStream: Writable = {
  write: (buffer: Uint8Array | string): boolean => {
    // eslint-disable-next-line no-console
    console.dir(buffer, {
      depth: undefined,
      colors: true
    });
    return true;
  }
} as Writable;

const loggerFactory = ({
  loggerName,
  logLevel
}: {
  loggerName: string;
  logLevel: LogLevel;
}): Logger => {
  const streams: Stream[] = [{
    stream: prettyStream,
    type: "raw"
  }];

  return createLogger({
    name: loggerName,
    level: logLevel,
    serializers: {
      err: stdSerializers.err,
      id: (input: { readonly toString: () => string }) => input.toString()
    },
    streams
  });
};

export const appLogger = loggerFactory({
  loggerName: "app",
  logLevel: "trace"
});
