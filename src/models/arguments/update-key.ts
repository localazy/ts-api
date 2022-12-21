type UpdateKey = {
  projectId: string;
  keyId: string;
  deprecated?: number;
  hidden?: boolean;
  comment?: string;
  limit?: number;
};

export default UpdateKey;
