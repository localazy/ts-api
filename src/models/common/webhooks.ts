export type WebhookEvent = 'project_published' | 'import_finished' | 'import_finished_empty' | 'comment_added';

export type Webhook = {
  enabled: boolean;
  customId?: string;
  description?: string;
  url: string;
  events: WebhookEvent[];
};

type Webhooks = {
  items: Webhook[];
};

export default Webhooks;
