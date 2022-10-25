type ListKeysInFile = {
  projectId: string;
  fileId: string;
  /** Locale code {lang} must be in the format: ll-Scrp-RR */
  lang: string;
  deprecated?: boolean;
  limit?: number;
  next?: string;
  /** Receive additional info such as translation note, whether it's hidden etc. */
  extra_info?: boolean;
};

export default ListKeysInFile;
