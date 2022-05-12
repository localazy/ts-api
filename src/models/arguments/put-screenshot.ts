import { Phrase, Tag, Metadata } from '../common/screenshots';

export type Screenshot = {
  /** Custom comment for the screenshot */
  comment?: string;
  /** Add or remove tags. Adding has priority over removing. Cannot be used together with tags. */
  addTags?: Tag[];
  removeTags?: Tag[];
  /** Replace tags with the current value. Cannot be used together with addTags and/or removeTags. */
  tags?: Tag[];
  /** Add or remove linked phrases. Adding has priority over removing. Cannot be used together with phrases. */
  addPhrases?: Phrase[];
  removePhrases?: Phrase[];
  /** Replace linked phrases with the current value. Cannot be used together with addPhrases and/or removePhrases. */
  phrases?: Phrase[];
  /** Add or remove metadata. Adding has priority over removing. Cannot be used together with metadata. */
  addMetaData?: Metadata;
  removeMetaData?: Metadata;
  /** Replace metadata with the current value. Cannot be used together with addMetadata and/or removeMetadata. */
  metadata?: Metadata;

};

type PutScreenshot = {
  projectId: string;
  screenshotId: string;
  screenshot: Screenshot;
};

export default PutScreenshot;
