import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const imagePath = '../../assets/icons/logo/logo.png';

const styles = StyleSheet.create({
  headerStyle: {
    margin: 5,
    flex: 1,
    alignItems: 'center',
  },
  logoIcon: {
    height: 30,
    resizeMode: 'contain',
  },
});

const logo = (
  <View style={styles.headerStyle}>
    <Image source={require(imagePath)} style={styles.logoIcon} />
  </View>
);

export const MainRouteConfigMap = {
  List: {
    name: 'listScreen',
    options: {
      headerTitle: () => logo,
    },
  },
  Detail: {
    name: 'detailScreen',
    options: {
      headerTitle: () => logo,
      headerRight: () => <View />,
    },
  },
};
