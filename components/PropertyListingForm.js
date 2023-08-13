import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PropertyListingForm = () => {
  const [propertyType, setPropertyType] = useState('Villa');
  const [numOfRooms, setNumOfRooms] = useState('');
  const [parkingAvailable, setParkingAvailable] = useState(false);
  const [numOfToilets, setNumOfToilets] = useState('');
  const [extraDetails, setExtraDetails] = useState('');

  const propertyTypeOptions = [
    { label: 'Villa', value: 'Villa' },
    { label: 'Duplex', value: 'Duplex' },
    { label: 'Flat', value: 'Flat' },
    { label: 'Standalone', value: 'Standalone' },
  ];

  const handleListingProperty = () => {
    // You can implement the submission logic here.
    // For example, send the form data to the backend or perform any necessary actions.
    console.log('Form submitted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Property Listing Form</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Type of property:</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          value={propertyType}
          onValueChange={(value) => setPropertyType(value)}
          items={propertyTypeOptions}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Number of rooms:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numOfRooms}
          onChangeText={(value) => setNumOfRooms(value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Parking available:</Text>
        <Switch
          value={parkingAvailable}
          style={{borderColor: '#ffcccb'}}
          onValueChange={(value) => setParkingAvailable(value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Number of toilets:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numOfToilets}
          onChangeText={(value) => setNumOfToilets(value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Extra Details:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          numberOfLines={4}
          value={extraDetails}
          onChangeText={(value) => setExtraDetails(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleListingProperty}>
        <Text style={styles.buttonText}>LIST PROPERTY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    flexDirection: 'column',
    marginBottom: 20,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Align the text to the top in multiline inputs
  },
  button: {
    padding: 10,
    backgroundColor: '#fd5c63',
    borderRadius: 4,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'black',
  },
  inputAndroid: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'black',
  },
});

export default PropertyListingForm;
