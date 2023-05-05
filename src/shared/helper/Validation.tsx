import {Toast} from 'react-native-toast-message/lib/src/Toast';

export const checkValue = (email: string, password: string) => {
  let StringEmail: string = String(email);
  let validEmail: any = StringEmail.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  );
  let passowrdCheck: boolean = String(password).length > 7;
  if (validEmail && passowrdCheck) {
    return true;
  } else {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text2: 'pastikan kamu mengisi email dan password',
      });
    } else if (!validEmail) {
      Toast.show({
        type: 'error',
        text2: 'harap masukan email yang valid',
      });
    } else if (!passowrdCheck) {
      Toast.show({
        type: 'error',
        text2: 'pastikan password kamu lebih dari 7',
      });
    } else {
      Toast.show({
        type: 'error',
        text2: 'pastikan password dan email kamu valid dan tidak boleh kosong',
      });
    }
    return false;
  }
};
