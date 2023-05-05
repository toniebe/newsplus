export interface articlesProps {
  image: string;
  title: string;
  source: sourceTypes;
  trending?: number;
  descripttion?: string;
  content?: string;
  publish?: string;
  url?: string;
}

export type sourceTypes = {
  name: string;
  url: string;
};
