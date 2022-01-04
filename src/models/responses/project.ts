import Language from './language';
import Organization from './organization';

type Project = {
  id: string;
  orgId: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  description: string;
  type: 'public' | 'private' | 'secret';
  tone: string;
  role: 'owner' | 'manager' | 'reviewer' | 'translator';
  sourceLanguage: number;
  organization: Organization;
  languages: Language[];
};

export default Project;
