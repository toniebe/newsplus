import {callAPI} from '@SharedModule/config/CallAPI';

export const CategoryDetail = async (category: string) => {
  return await callAPI(`/search?q=${category}&max=20`);
};
