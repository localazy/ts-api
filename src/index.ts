import api from './api';
import Constructor from './models/constructor';
import CommonConfig from './models/common-config';
import ListProjects from './models/list-projects';
import Import from './models/import';
import ListFiles from './models/list-files';
import ListKeysInFile from './models/list-keys-in-file';

class LocalazyService {
  private projectToken!: string;

  private baseUrl!: string;

  constructor(options: Constructor) {
    this.projectToken = options.projectToken;
    this.baseUrl = options.baseUrl || '';
  }

  /**
   * List projects related to the project token.
  * @see https://localazy.com/docs/api/list-projects
  */
  public async listProjects(options: ListProjects = {}, config: CommonConfig = {}) {
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects`,
      projectToken: config.projectToken || this.projectToken,
      options,
    });
  }

  /**
  * Import content into Localazy.
  * @see https://localazy.com/docs/api/import
  */
  public async import(options: Import, config: CommonConfig = {}) {
    const { projectId, ...payload } = options;
    return api.post({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/import`,
      projectToken: config.projectToken || this.projectToken,
      options: payload as Omit<Import, 'projectId'>,
    });
  }

  /**
  * Retrieve list of available file formats and related options.
  * @see https://localazy.com/docs/api/import#retrieve-a-list-of-available-file-types
  */
  public async listFormats(config: CommonConfig = {}) {
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/import/formats`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
  * List Localazy files.
  * @see https://localazy.com/docs/api/files
  */
  public async listFiles(options: ListFiles, config: CommonConfig = {}) {
    const { projectId } = options;
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/files`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
  * Retrieve list of keys for language from file.
  * @see https://localazy.com/docs/api/files#retrieve-a-list-of-keys-and-translations-from-file
  */
  public async listKeysInFileForLanguage(options: ListKeysInFile, config: CommonConfig = {}) {
    const {
      projectId, fileId, lang, ...payload
    } = options;
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/files/${fileId}/keys/${lang}`,
      projectToken: config.projectToken || this.projectToken,
      options: payload as Omit<ListKeysInFile, 'projectId' | 'fileId'>,
    });
  }
}

export default function LocalazyServiceFactory(options: Constructor) {
  return new LocalazyService(options);
}
