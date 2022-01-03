type Common = {
  url: string;
  projectToken: string;
  options?: Record<string, unknown>;
};

export default class LocalazyAPI {
  public static async get(options: Common) {
    const queryParams = options.options ? `?${LocalazyAPI.getQueryString(options.options)}` : '';

    const response = await fetch(`/api${options.url}${queryParams}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${options.projectToken}`,
      },
    }).catch((e) => {
      throw e;
    });
    return response.json();
  }

  public static async post(options: Common) {
    const response = await fetch(`/api${options.url}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${options.projectToken}`,
        'Content-Type': 'application/json',
      },
      body: options.options ? JSON.stringify(options.options) : undefined,
    }).catch((e) => {
      throw e;
    });
    return response.json();
  }

  private static getQueryString = (queries: Record<string, any>) => Object.entries(queries)
    .reduce((acc, [key, value]) => [...acc, `${encodeURIComponent(key)}=${encodeURIComponent(value)}`], [] as string[])
    .join('&');
}
