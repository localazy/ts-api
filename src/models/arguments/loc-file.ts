import LocFileContent from './loc-file-content';

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
  /** Content of the file - strings to be imported */
  content: LocFileContent;
};

export default LocFile;
