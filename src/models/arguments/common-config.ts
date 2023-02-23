type CommonConfig = {
  /** Optionally override initially set project token */
  projectToken?: string;
  /** Prefix for current api call only. */
  baseUrl?: string;
  /** Optionally pass additional headers */
  headers?: Record<string, string>;
};

export default CommonConfig;
