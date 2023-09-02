import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo vector icons

const Overlooking = () => {
  const roomOptions = ["Park/Garden", "Main Road", "Club", "Pool", "Others", "Sea facing"];

  const [selectedRooms, setSelectedRooms] = useState([]);

  const toggleRoomSelection = (room) => {
    if (selectedRooms.includes(room)) {
      setSelectedRooms(selectedRooms.filter((selectedRoom) => selectedRoom !== room));
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Overlooking (Optional) </Text>
      <View style={styles.optionsContainer}>
        {roomOptions.map((room) => (
          <OptionButton
            key={room}
            room={room}
            selected={selectedRooms.includes(room)}
            onPress={() => toggleRoomSelection(room)}
          />
        ))}
      </View>
    </View>
  );
};

const OptionButton = ({ room, selected, onPress }) => {
    return (
      <TouchableOpacity
        style={[styles.optionButton, selected && styles.selectedOption]}
        onPress={onPress}
      >
        <Ionicons name="ios-add" size={24} color="#000000" />
        <Text style={[styles.optionText, selected && styles.selectedOptionText]}>{room}</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  question: {
    fontSize: 18,
    marginBottom: 6,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000', // Customize the border color as per your design
  },
  optionText: {
    marginLeft: 5,
    fontSize: 14,
  },
  selectedOption: {
    backgroundColor: '#ffcccb',
    borderColor: '#ffcccb' // Customize the selected border color as per your design
  },
  selectedOptionText: {
    // color: '#007bff', // Change the color to your preferred selected text color
  },
});

export default Overlooking;
