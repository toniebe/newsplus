import {callAPI} from '@SharedModule/config/CallAPI';

export const getArticleSports = async () => {
  return await callAPI('/top-headlines?category=sports&max=5');
};
