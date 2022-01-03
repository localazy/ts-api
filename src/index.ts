import api from './api';

type Constructor = {
  projectToken: string;
  baseUrl?: string;
};

type NonStaticOptions = {
  /** Optionally override initially set project token */
  projectToken?: string;
  baseUrl?: string;
};

type ListProjects = {
  /** Add information about the owning organization. */
  organization?: boolean;
  /** Add information about languages. */
  languages?: boolean;
};

type LocFileContentLanguage = {
  [k: string]: string | string[] | LocFileContentLanguage;
};

type LocFileContent = {
  /** The file type to be used for backing the strings. @see https://localazy.com/docs/api/import#response-1 */
  type?: string;
  plural?: string;
  array?: string;
  keyTransformer?: string;
  params?: Record<string, any>;
  features?: string[];
} & LocFileContentLanguage;

type LocFile = {
  /** The file name */
  name: string;
  /** The path to the file without the file name. */
  path?: string;
  /** Optional module specification. */
  module?: any;
  /** Optional build type. */
  buildType?: any;
  library?: string;
  /** Optional product flavors. */
  productFlavors?: any;
  content: LocFileContent;
};

type Import = {
  projectId: string;
  importAsNew?: boolean;
  forceCurrent?: boolean;
  filterSource?: boolean;
  files: LocFile[];
};

type ListFiles = {
  projectId: string;
};

type ListKeysInFile = {
  projectId: string;
  fileId: string;
  /** Locale code {lang} must be in the format: ll-Scrp-RR */
  lang: string;
  deprecated?: boolean;
  limit?: number;
  next?: string;
};

class LocalazyService {
  private projectToken!: string;

  private baseUrl!: string;

  constructor(options: Constructor) {
    this.projectToken = options.projectToken;
    this.baseUrl = options.baseUrl || '';
  }

  /**
     * @see https://localazy.com/docs/api/list-projects
     */
  public async listProjects(options: ListProjects = {}, config: NonStaticOptions = {}) {
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects`,
      projectToken: config.projectToken || this.projectToken,
      options,
    });
  }

  /**
     * @see https://localazy.com/docs/api/import
     */
  public async import(options: Import, config: NonStaticOptions = {}) {
    const { projectId, ...payload } = options;
    return api.post({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/import`,
      projectToken: config.projectToken || this.projectToken,
      options: payload as Omit<Import, 'projectId'>,
    });
  }

  /**
     * @see https://localazy.com/docs/api/import#retrieve-a-list-of-available-file-types
     */
  public async listFormats(config: NonStaticOptions = {}) {
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/import/formats`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
     * @see https://localazy.com/docs/api/files
     */
  public async listFiles(options: ListFiles, config: NonStaticOptions = {}) {
    const { projectId } = options;
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/files`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
     * @see https://localazy.com/docs/api/files#retrieve-a-list-of-keys-and-translations-from-file
     */
  public async listKeysInFileForLanguage(options: ListKeysInFile, config: NonStaticOptions = {}) {
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
