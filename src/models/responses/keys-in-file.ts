export type Key = {
  id: string;
  /** nested keys are stored as array entries. Simple keys are arrays containing single item. */
  key: string[];
  value: string[];
};

type KeysInFile = {
  keys: Key[];
  /** Next is the paging key. The field is not contained if there are no more pages. */
  next?: string;
};

export default KeysInFile;
