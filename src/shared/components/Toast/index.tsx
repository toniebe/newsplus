import {scale} from '@SharedHelper/Scaling';
import {CError, CSuccess, Primary, White} from '@SharedStyles/colors';
import font from '@SharedStyles/font';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => {
    return (
      <BaseToast
        {...props}
        text1NumberOfLines={2}
        contentContainerStyle={{
          backgroundColor: CSuccess,
        }}
        text1Style={[
          font.MontserratRegular,
          {
            fontSize: scale(10),
            fontWeight: '400',
            color: White,
          },
        ]}
      />
    );
  },

  error: (props: any) => {
    return (
      <ErrorToast
        {...props}
        text2NumberOfLines={2}
        text2Style={[
          font.MontserratRegular,
          {
            color: CError,
            fontSize: scale(10),
            textAlign: 'center',
          },
        ]}
        contentContainerStyle={{
          backgroundColor: 'rgba(255, 105,	72, 0.2)',
        }}
      />
    );
  },

  primary: (props: any) => (
    <BaseToast
      {...props}
      text1NumberOfLines={2}
      text1Style={[
        font.MontserratRegular,
        {
          fontSize: scale(10),
          fontWeight: '400',
          color: White,
        },
      ]}
      contentContainerStyle={{
        backgroundColor: Primary,
      }}
    />
  ),
};
