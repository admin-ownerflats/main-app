import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FloorDetails = () => {
  const [totalFloors, setTotalFloors] = useState('');
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const floorsArray = Array.from({ length: parseInt(totalFloors) + 1 }, (_, i) => i.toString());

  const handleTotalFloorsChange = (value) => {
    setTotalFloors(value);
    setSelectedFloor(null); // Clear selected floor on total floors change
    setIsDropdownOpen(false);
  };

  const handleFloorSelect = (floor) => {
    setSelectedFloor(floor);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Total Floors"
        keyboardType="numeric"
        value={totalFloors}
        onChangeText={handleTotalFloorsChange}
      />
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
          <Text style={styles.dropdownValue}>
            {selectedFloor === null ? 'Property on Floor' : selectedFloor}
          </Text>
          <Text style={styles.dropdownArrow}>{isDropdownOpen ? '\u25B2' : '\u25BC'}</Text>
        </TouchableOpacity>
        {isDropdownOpen && (
          <View style={styles.dropdownOptions}>
            {floorsArray.map((floor) => (
              <TouchableOpacity
                key={floor}
                style={styles.dropdownOption}
                onPress={() => handleFloorSelect(floor)}
              >
                <Text>{floor}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 8,
    backgroundColor: '#F7F7F7', // Customize the background color as per your design
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  dropdownContainer: {
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
  },
  dropdownValue: {
    flex: 1,
    // color: selectedFloor === null ? '#a9a9a9' : '#000000',
  },
  dropdownArrow: {
    fontSize: 20,
  },
  dropdownOptions: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    width: '100%',
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
});

export default FloorDetails;
