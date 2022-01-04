type FileResult = {
  id: string;
  type: string;
  name: string;
  path?: string;
  module?: string;
  productFlavors?: string;
  buildType?: string;
};

export default FileResult;
