import { LocalazyError } from './errors/localazy-error';

type Common = {
  url: string;
  projectToken: string;
  headers?: Record<string, string>;
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
        ...options.headers,
      },
    }).catch((e) => {
      throw e;
    });
    const json = await response.json();
    if (json.success === false) {
      throw new LocalazyError(json.error, json.message, json.code);
    }

    return json;
  }

  public static async getBlob(options: Common): Promise<Blob> {
    const response = await fetch(`${options.url}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${options.projectToken}`,
        'Response-Type': 'blob',
        ...options.headers,
      },
    }).catch((e) => {
      throw e;
    });
    if (response.status >= 400 && response.status < 500) {
      throw new LocalazyError(response.statusText, '', response.status);
    }

    return response.blob();
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
        ...options.headers,
      },
      body,
    }).catch((e) => {
      throw e;
    });
    const json = await response.json();
    if (json.success === false) {
      throw new LocalazyError(json.error, json.message, json.code);
    }

    return json;
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
        ...options.headers,
      },
      body,
    }).catch((e) => {
      throw e;
    });
    const json = await response.json();
    if (json.success === false) {
      throw new LocalazyError(json.error, json.message, json.code);
    }

    return json;
  }

  public static async delete(options: Common) {
    const response = await fetch(`${options.url}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${options.projectToken}`,
        ...options.headers,
      },
    }).catch((e) => {
      throw e;
    });
    const json = await response.json();
    if (json.success === false) {
      throw new LocalazyError(json.error, json.message, json.code);
    }

    return json;
  }

  private static getQueryString = (queries: Record<string, any>) => Object.entries(queries)
    .reduce((acc, [key, value]) => [...acc, `${encodeURIComponent(key)}=${encodeURIComponent(value)}`], [] as string[])
    .join('&');
}
