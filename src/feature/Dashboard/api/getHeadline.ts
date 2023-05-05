import {callAPI} from '@SharedModule/config/CallAPI';

export const getHeadline = async () => {
  return await callAPI('/top-headlines?category=general');
};
