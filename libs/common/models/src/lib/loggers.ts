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

const emojiForLevel = (level: string) => {
  switch (level) {
    case 'error':
      return '💥';
    case 'warn':
      return '⚠️';
    case 'info':
      return '💬';
    case 'verbose':
      return '💜';
    case 'debug':
      return '💚';
    case 'silly':
      return '💙';
    default:
      return '💛';
  }
};

const colorFormat = (label?: string) => format.combine(
  format.timestamp({
    format: 'HH:mm a',
  }),
  format.label({ label }),
  format.align(),
  format.prettyPrint({
    colorize: true,
  }),
  format.printf(({label, timestamp, level, message }) => {
    
    if(label)
    return `\n\x1b[44m\x1b[37m\x1b[1m[${label}]\x1b[0m\x1b[0m\x1b[2m<-->\x1b[0m\x1b[1m\x1b[36m(${timestamp})\x1b[0m-\x1b[0m\x1b[0m\x1b[0m<<${emojiForLevel(level)} \x1b[33m${level.toUpperCase()}\x1b[0m>>:\x1b[32m ${message}\x1b[0m`;
    else
    return `\n\x1b[44m\x1b[37m[LOG]\x1b[0m\x1b[0m\x1b[2m<-->\x1b[0m\x1b[1m\x1b[36m(${timestamp})\x1b[0m-\x1b[0m\x1b[0m\x1b[0m<<${emojiForLevel(level)} \x1b[33m${level.toUpperCase()}\x1b[0m>>:\x1b[32m ${message}\x1b[0m`;
  })
);


const devLogger = (label?: string) => createLogger({
  transports: [new transports.Console()],
  format: colorFormat(label),
});

const prodLogger = (label?: string) => createLogger({
  transports: [new transports.Console()],
  format: colorFormat(label),
  levels: {
    'error': 0,
    'warn': 1,
    'http': 3,
  },
});

export function getLogger(label?: string): Logger {
  if (process.env['NODE_ENV'] === 'production') {
    return prodLogger(label)
  } else {
    return devLogger(label)
  }
}
