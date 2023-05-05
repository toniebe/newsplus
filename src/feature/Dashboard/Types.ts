export interface DashboardScreenProps {
  navigation: any;
  headline: any;
  loading: boolean;
  category: categoryType[];
  dataSport: articlesProps[];
  user: any;
}

export type renderItemTypes = {
  item: articlesProps;
  index: number;
};

export interface articlesProps {
  image: string;
  title: string;
  source: sourceTypes;
  trending?: number;
  url?: string;
  descripttion?: string;
  content?: string;
  publish?: string;
}

export type sourceTypes = {
  name: string;
  url: string;
};

export type categoryType = {
  id?: number;
  name: string;
  image: any;
  description: string;
  onPress?: any;
};

export interface renderCategory {
  item: categoryType;
  index: number;
}
