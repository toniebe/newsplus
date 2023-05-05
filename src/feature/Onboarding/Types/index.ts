export type itemType = {
  image_url: string;
  title: string;
  desc: string;
};

export interface OnboardingItemProps {
  data: itemType;
}

export interface PaginatorProps {
  data: itemType[];
  scrollX: any;
}

export interface dataTypes {
  data: itemType[];
  navigation: any;
}
