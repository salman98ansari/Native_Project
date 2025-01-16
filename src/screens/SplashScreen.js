import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  var logo = require('../assets/images/logo.png');

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen');
    }, 1000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
            height: 250,
            zIndex: 1,
          }}
          source={logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
