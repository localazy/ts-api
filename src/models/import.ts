import LocFile from './loc-file';

/** @see [Request structure](https://localazy.com/docs/api/import#request-structure) */
type Import = {
  projectId: string;
  /** Import all translations to go through the review process.
     * Useful when you are unsure about their quality and want to do an extra check.
     * Default: false */
  importAsNew?: boolean;
  /** Import all translations and set them as the current version.
     * By default, Localazy doesn’t overwrite existing current translations and lets you decide through
     * the review process.
     * Default: false */
  forceCurrent?: boolean;
  /** Do not import translations that are the same as the source language content.
     * Default: true */
  filterSource?: boolean;
  /** The structure of files and strings to be imported. */
  files: LocFile[];
};

export default Import;
