import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const PropertyDetailsInput = () => {
  const [propertyDetails, setPropertyDetails] = useState('');

  const handleInputChange = (text) => {
    setPropertyDetails(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Share some details about your property like spacious rooms, well-maintained facilities..."
        value={propertyDetails}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 5,
    marginBottom: 5,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default PropertyDetailsInput;
