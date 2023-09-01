import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CarpetAreaInput = ({ textHeading, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{textHeading}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder="Enter area in square ft."
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
});

export default CarpetAreaInput;
