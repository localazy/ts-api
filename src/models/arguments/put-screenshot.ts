import { Phrase, Tag, Metadata } from '../common/screenshots';

type Screenshot = {
  comment?: string;
  addTags?: Tag[];
  removeTags?: Tag[];
  tags?: Tag[];
  addPhrases?: Phrase[];
  removePhrases?: Phrase[];
  phrases?: Phrase[];
  addMetaData?: Metadata;
  removeMetaData?: Metadata;
  metadata?: Metadata;

};

type PutScreenshot = {
  projectId: string;
  screenshotId: string;
  screenshot: Screenshot;
};

export default PutScreenshot;
