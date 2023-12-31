import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BasicDetailsForm = ({ onNext }) => {
  const [lookingTo, setLookingTo] = useState('');
  const [propertyKind, setPropertyKind] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [sellerPropertyType, setSellerPropertyType] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleNext = () => {
    // Implement logic to move to the next step or component
  };

  const renderOptions = (options, selectedOption, onSelect) => {
    return options.map((option) => (
      <TouchableOpacity
        key={option}
        style={[
          styles.option,
          selectedOption === option && styles.selectedOption,
        ]}
        onPress={() => onSelect(option)}
      >
        {selectedOption === option && <Icon name="check" size={12} color="white" style={styles.checkIcon} />}
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>List Your Owned Property</Text>
        <Image source={require('../../assets/OwnerFlats.png')} style={styles.logo} />
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Add Basic Details</Text>

        <View style={styles.optionContainer}>
        <Text style={styles.question}>You are looking to?</Text>
        <View style={styles.optionsRow}>
          {renderOptions(['Sell', 'Rent', 'Paying Guest'], lookingTo, setLookingTo)}
        </View>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.question}>What kind of Property?</Text>
        <View style={styles.optionsRow}>
          {renderOptions(['Residential', 'Commercial'], propertyKind, setPropertyKind)}
        </View>
      </View> 

      <View style={styles.optionContainer}>
        <Text style={styles.question}>Select Property Type</Text>
        <View style={styles.optionsRow}>
          {renderOptions(['Apartment', 'Independent House/Villa', 'Independent/Builder Floor', 'Plot/Land', '1RK/Studio Apartment', 'Serviced Apartment', 'Farmhouse', 'Other'], propertyType, setPropertyType)}
        </View>
      </View>

        {/* Options, questions, and other form components */}
        
        <View style={styles.inputContainer}>
          <View style={styles.prefixContainer}>
            <Text style={styles.prefixText}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            value={contactDetails}
            onChangeText={setContactDetails}
            placeholder="Your contact details"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#528AAE',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingTop: 5, // Adjust as needed for the status bar
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight: 40,
  },
  logo: {
    width: 60,
    height: 40,
  },
  formContainer: {
    marginTop: 70, // Adjust as needed based on header height
    paddingHorizontal: 20,
  },
  formHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#FF5733',
  },
  checkIcon: {
    marginRight: 6,
  },
  optionText: {
    color: '#444',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  prefixContainer: {
    marginRight: 10,
  },
  prefixText: {
    color: '#333',
    fontSize: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#FF5733',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BasicDetailsForm;
