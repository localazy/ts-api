type DownloadFile = {
  projectId: string;
  fileId: string;
  /** Locale code {lang} must be in the format: ll-Scrp-RR */
  lang: string;
};

export default DownloadFile;
