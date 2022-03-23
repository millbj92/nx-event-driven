import { createLogger, transports, format, Logger } from 'winston';

function deriveLevel(level: string): number {
  switch (level) {
    case 'error':
      return 0;
    case 'warn':
      return 1;
    case 'info':
      return 2;
    case 'verbose':
      return 3;
    case 'debug':
      return 4;
    case 'silly':
      return 5;
    default:
      return 2;
  }
}

const devLogger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
});

const prodLogger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return deriveLevel(level) < 2
        ? ''
        : `[${timestamp}] ${level}: ${message}`;
    })
  ),
});

export function getLogger(): Logger {
  if (process.env['NODE_ENV'] === 'production') {
    return prodLogger;
  } else {
    return devLogger;
  }
}
