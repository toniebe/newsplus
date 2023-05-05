import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {BASE_URL, API_KEY} from '@env';
export const callAPI = async (url: string) => {
  let response = await fetch(`${BASE_URL}${url}&lang=en&apikey=${API_KEY}`)
    .then((response: any) => {
      return response.json();
    })
    .catch(err =>
      Toast.show({
        type: 'error',
        text2: err,
      }),
    );
  return response;
};
