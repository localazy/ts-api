type Common = {
  url: string;
  projectToken: string;
  options?: Record<string, unknown>;
  rawData?: string;
};

export default class LocalazyAPI {
  public static async get(options: Common) {
    const queryParams = options.options ? `?${LocalazyAPI.getQueryString(options.options)}` : '';

    const response = await fetch(`${options.url}${queryParams}`, {
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
    let body;
    if (options.rawData) {
      body = options.rawData;
    } else if (options.options) {
      body = JSON.stringify(options.options);
    }

    const response = await fetch(`${options.url}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${options.projectToken}`,
        'Content-Type': 'application/json',
      },
      body,
    }).catch((e) => {
      throw e;
    });
    return response.json();
  }

  public static async put(options: Common) {
    let body;
    if (options.rawData) {
      body = options.rawData;
    } else if (options.options) {
      body = JSON.stringify(options.options);
    }

    const response = await fetch(`${options.url}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${options.projectToken}`,
        'Content-Type': 'application/json',
      },
      body,
    }).catch((e) => {
      throw e;
    });
    return response.json();
  }

  public static async delete(options: Common) {
    const response = await fetch(`${options.url}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${options.projectToken}`,
      },
    }).catch((e) => {
      throw e;
    });
    return response.json();
  }

  private static getQueryString = (queries: Record<string, any>) => Object.entries(queries)
    .reduce((acc, [key, value]) => [...acc, `${encodeURIComponent(key)}=${encodeURIComponent(value)}`], [] as string[])
    .join('&');
}
