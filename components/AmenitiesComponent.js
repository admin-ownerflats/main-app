// AmenitiesComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AmenitiesComponent = ({ onSubmit }) => {
  const [amenities, setAmenities] = useState([]);
  // ... other state variables and handlers

  return (
    <View>
      <Text>Add Amenities</Text>
      {/* Render your form inputs here */}
      {/* ... checkboxes and other input components */}
      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmenitiesComponent;
