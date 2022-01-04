import api from './api';
import Constructor from './models/arguments/constructor';
import CommonConfig from './models/arguments/common-config';
import ListProjects from './models/arguments/list-projects';
import Import from './models/arguments/import';
import ListFiles from './models/arguments/list-files';
import ListKeysInFile from './models/arguments/list-keys-in-file';
import Project from './models/responses/project';
import ImportResult from './models/responses/import-result';
import Format from './models/responses/format';
import FileResult from './models/responses/file-result';
import KeysInFile from './models/responses/keys-in-file';

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
  public async listProjects(options: ListProjects = {}, config: CommonConfig = {}): Promise<Project[]> {
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
  public async import(options: Import, config: CommonConfig = {}): Promise<ImportResult> {
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
  public async listFormats(config: CommonConfig = {}): Promise<Format[]> {
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/import/formats`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
  * List Localazy files.
  * @see https://localazy.com/docs/api/files
  */
  public async listFiles(options: ListFiles, config: CommonConfig = {}): Promise<FileResult[]> {
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
  public async listKeysInFileForLanguage(options: ListKeysInFile, config: CommonConfig = {}): Promise<KeysInFile> {
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
