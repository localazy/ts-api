export type Phrase = string;
export type Tag = string;
export type Metadata = Record<string, string>;

type Screenshot = {
  id: string;
  url: string;
  comment: string;
  phrases: Phrase[];
  tags: Tag[];
  ocrData: string;
  metadata: Metadata,
};

export default Screenshot;
