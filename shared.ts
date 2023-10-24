export class NotYetImplementedError extends Error {
  constructor(message?: string) {
    super(`Not yet implemnted${message === undefined ? '.' : `: ${message}`}`);
  }
}

// TSOA's implementation of assertNever.
export function assertNever(value: never): never {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
}
