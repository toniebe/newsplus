import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  ActivateConfig,
  remoteConfigGetValue,
} from '@SharedModule/config/RemoteConfig';
import Button from '@SharedModule/components/Button';

const TestScreen = () => {
  useEffect(() => {
    ActivateConfig();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button
          type="primary"
          title={remoteConfigGetValue('edit_profile').asString()}
          disable={false}
          onPress={() => console.log('edit profile')}
          size="large"
        />
      </View>
      <View style={styles.content}>
        <Button
          type="primary"
          title={remoteConfigGetValue('tnc_profile').asString()}
          disable={false}
          onPress={() => console.log('tnc profile')}
          size="large"
        />
      </View>
      <View style={styles.content}>
        <Button
          type="primary"
          title={remoteConfigGetValue('privacy_policy_profile').asString()}
          disable={false}
          onPress={() => console.log('tnc profile')}
          size="large"
        />
      </View>
      <View style={styles.content}>
        <Button
          type="primary"
          title={remoteConfigGetValue('logout_profile').asString()}
          disable={false}
          onPress={() => console.log('tnc profile')}
          size="large"
        />
      </View>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
