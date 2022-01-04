type Format = {
  type: string;
  name: string;
  supportStrings: boolean;
  supportPlurals: boolean;
  supportArrays: boolean;
  supportStructuredKeys: boolean;
  plurals?: PluralMeta[];
  arrays?: ArrayMeta[];
  keyTransformers?: KeyTransformerMeta[];
};

export type PluralMeta = {
  type: string;
  name: string;
  isDefault: boolean;
  requiredParams?: Array<{
    type: String;
    description: string;
  }>;
};

export type ArrayMeta = {
  type: string;
  name: string;
  isDefault: boolean;
};

export type KeyTransformerMeta = {
  type: string;
  name: string;
  isDefault: boolean;
};

export type PluralFormat = Format & {
  supportPlurals: true;
  plurals: PluralMeta[];
};

export type ArrayFormat = Format & {
  supportArrays: true;
  arrays: ArrayMeta[];
};

export default Format;
