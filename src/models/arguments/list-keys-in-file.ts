type ListKeysInFile = {
  projectId: string;
  fileId: string;
  /** Locale code {lang} must be in the format: ll-Scrp-RR */
  lang: string;
  deprecated?: boolean;
  limit?: number;
  next?: string;
};

export default ListKeysInFile;
