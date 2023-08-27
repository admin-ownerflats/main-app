import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Subheading = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subheadingText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  subheadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Subheading;
