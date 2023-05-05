import auth from '@react-native-firebase/auth';

export const handleLogout = (navigation: any) => {
  auth()
    .signOut()
    .then(() => navigation.replace('Onboarding'));
};
