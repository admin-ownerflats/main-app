import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CheckboxGroup = () => {
  const options = [
    'Gated society',
    'Corner property',
    'Pet Friendly',
    'Wheel chair friendly',
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <View key={option} style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              selectedOptions.includes(option) && styles.checked,
            ]}
            onPress={() => handleCheckboxToggle(option)}
          >
            {selectedOptions.includes(option) && (
              <Feather name="check" size={18} color="#e74c3c" />
            )}
          </TouchableOpacity>
          <Text style={styles.optionText}>{option}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#e74c3c',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default CheckboxGroup;
