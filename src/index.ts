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
import ListWebhooks from './models/arguments/list-webhooks';
import ListWebhooksResult from './models/responses/list-webhooks-result';
import PostWebhooks from './models/arguments/post-webhooks';
import PostWebhooksResult from './models/responses/post-webhooks-result';
import ListScreenshots from './models/arguments/list-screenshots';
import ListScreenshotsResult from './models/responses/list-screenshots-result';
import ListScreenshotsTags from './models/arguments/list-screenshots-tags';
import ListScreenshotsTagsResult from './models/responses/list-screenshots-tags-result';
import PostScreenshots from './models/arguments/post-screenshots';
import PostScreenshotsResult from './models/responses/post-screenshots-result';
import PostScreenshot from './models/arguments/post-screenshot';
import PostScreenshotResult from './models/responses/post-screenshot-result';
import PutScreenshot from './models/arguments/put-screenshot';
import PutScreenshotResult from './models/responses/put-screenshot-result';
import DeleteScreenshot from './models/arguments/delete-screenshot';
import DeleteScreenshotResult from './models/responses/delete-screenshot-result';
import GetFileContents from './models/arguments/get-file-contents';

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
   * Returns the given file contents.
   * @see https://localazy.com/docs/api/files
   */
  public async getFileContents(options: GetFileContents, config: CommonConfig = {}) {
    const { projectId, fileId, lang } = options;
    return api.getBlob({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/files/${fileId}/download/${lang}`,
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

  /**
   * Retrieve list of webhooks for project.
   * @see https://localazy.com/docs/api/webhooks
   */
  public async listWebhooks(options: ListWebhooks, config: CommonConfig = {}): Promise<ListWebhooksResult> {
    const { projectId } = options;
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/webhooks`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
   * Store a new webhooks configuration for the project.
   * @see https://localazy.com/docs/api/webhooks
   */
  public async postWebhooks(options: PostWebhooks, config: CommonConfig = {}): Promise<PostWebhooksResult> {
    const { projectId } = options;
    return api.post({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/webhooks`,
      projectToken: config.projectToken || this.projectToken,
      options: options.webhooks,
    });
  }

  /**
   * Retrieve list of screenshots for project.
   * @see https://localazy.com/docs/api/screenshots
   */
  public async listScreenshots(options: ListScreenshots, config: CommonConfig = {}): Promise<ListScreenshotsResult> {
    const { projectId } = options;
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/screenshots`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
   * Retrive list of screenshots tags for project.
   * @see https://localazy.com/docs/api/screenshots
   */
  public async listScreenshotsTags(
    options: ListScreenshotsTags,
    config: CommonConfig = {},
  ): Promise<ListScreenshotsTagsResult> {
    const { projectId } = options;
    return api.get({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/screenshots/tags`,
      projectToken: config.projectToken || this.projectToken,
    });
  }

  /**
   * Upload a new screenshot for the project.
   * @see https://localazy.com/docs/api/screenshots
   */
  public async postScreenshots(options: PostScreenshots, config: CommonConfig = {}): Promise<PostScreenshotsResult> {
    const { projectId } = options;
    return api.post({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/screenshots`,
      projectToken: config.projectToken || this.projectToken,
      rawData: options.rawScreenshot,
    });
  }

  /**
   * Change image data of existing screenshot.
   * @see https://localazy.com/docs/api/screenshots
   */
  public async postScreenshot(options: PostScreenshot, config: CommonConfig = {}): Promise<PostScreenshotResult> {
    const { projectId, screenshotId } = options;
    return api.post({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/screenshots/${screenshotId}`,
      projectToken: config.projectToken || this.projectToken,
      rawData: options.rawScreenshot,
    });
  }

  /**
   * Change existing screenshot (metadata).
   * @see https://localazy.com/docs/api/screenshots
   */
  public async putScreenshot(options: PutScreenshot, config: CommonConfig = {}): Promise<PutScreenshotResult> {
    const { projectId, screenshotId } = options;
    return api.put({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/screenshots/${screenshotId}`,
      projectToken: config.projectToken || this.projectToken,
      options: options.screenshot,
    });
  }

  public async deleteScreenshot(options: DeleteScreenshot, config: CommonConfig = {}): Promise<DeleteScreenshotResult> {
    const { projectId, screenshotId } = options;
    return api.delete({
      url: `${config.baseUrl || this.baseUrl}/projects/${projectId}/screenshots/${screenshotId}`,
      projectToken: config.projectToken || this.projectToken,
    });
  }
}

export default function LocalazyServiceFactory(options: Constructor) {
  return new LocalazyService(options);
}
