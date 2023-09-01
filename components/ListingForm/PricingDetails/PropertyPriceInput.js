import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const PropertyPriceInput = ({ value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter Expected Price"
      keyboardType="numeric"
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#f5f5f5',
    color: '#333',
    width: '100%',
  },
});

export default PropertyPriceInput;
