import remoteConfig from '@react-native-firebase/remote-config';
export const ActivateConfig = (cb: any) => {
  remoteConfig()
    .setDefaults({
      config_app: 'default',
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then(fetchedRemotely => {
      if (fetchedRemotely) {
        cb(false);
      } else {
        cb(false);
      }
    })
    .catch(() => {
      cb(true);
    });
};

export const GetAllConfig = (data: any, cb: any) => {
  const parameters = remoteConfig().getAll();
  Object.entries(parameters).forEach(configs => {
    const [key, entry] = configs;
    const value = entry.asString();
    if (key === 'Intro') {
      data(value);
    }
  });
  cb();
};
