import React from 'react';
import { View, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import customSvg from '../assets/OwnerFlatsLogo.svg';

const CustomSVGComponent = () => {
  return (
    <View style={styles.container}>
      <SvgUri width="200" height="200" source={customSvg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomSVGComponent;
