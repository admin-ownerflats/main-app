import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BalconiesQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["0", "1", "2", "3", "More than 3"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>No. of Balconies</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleOptionSelect(option)}
            style={[
              styles.option,
              selectedOption === option && styles.selectedOption,
            ]}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: '#FF5733', // Change to your selected color
    borderColor: '#FF5733',
  },
  optionText: {
    color: '#444',
    fontSize: 14,
  },
});

export default BalconiesQuestion;