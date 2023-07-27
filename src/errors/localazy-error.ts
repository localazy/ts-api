export class LocalazyError extends Error {
  public code!: number;

  public error!: string;

  constructor(error: string, message: string, code: number) {
    super(message);
    this.name = 'LocalazyError';
    this.error = error;
    this.code = code;

    if ((LocalazyError as any).captureStackTrace) {
      (LocalazyError as any).captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error()).stack;
    }
  }
}
