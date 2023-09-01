import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BedroomsQuestion from './PropertyDetails/BedroomsQuestion';
import BathroomQuestion from './PropertyDetails/BathroomQuestion'
import BalconiesQuestion from './PropertyDetails/BalconiesQuestion';
import Subheading from '../Basics/Subheading';
import CarpetAreaInput from './PropertyDetails/CarpetAreaInput';
import OtherRooms from './PropertyDetails/OtherRooms';
import FloorDetails from './PropertyDetails/FloorDetails';
import CoveredParking from './PropertyDetails/CoveredParking';
import OpenParking from './PropertyDetails/OpenParking';

const PropertyDetailComponent = ({ onNext }) => {
  const [lookingTo, setLookingTo] = useState('');
  const [propertyKind, setPropertyKind] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [sellerPropertyType, setSellerPropertyType] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [buildUpArea, setBuildUpArea] = useState('');
  const [superBuildUpArea, setSuperBuildUptArea] = useState('');
  const [furnishingType, setFurnishingType] = useState('');
  const [availibility, setAvailibillity] = useState('');

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
        <Text style={styles.formHeading}>Property Details</Text>
        {/* Rooms Details */}
        <Subheading text="Rooms Details" />
        <BedroomsQuestion />
        <BathroomQuestion />
        <BalconiesQuestion />

        {/* Area Details */}
        <Subheading text="Area Details" />
        <CarpetAreaInput textHeading={"Carpet Area"} value={carpetArea} onChangeText={setCarpetArea} />
        <CarpetAreaInput textHeading={"Build-up Area"} value={buildUpArea} onChangeText={setBuildUpArea} />
        <CarpetAreaInput textHeading={"Super Build-up Area"} value={superBuildUpArea} onChangeText={setSuperBuildUptArea} />

        {/* Other rooms */}
        <OtherRooms />

        {/* Furnishing Details */}
        <View style={styles.optionContainer}>
          <Text style={styles.question}>Furnishing Details</Text>
          <View style={styles.optionsRow}>
            {renderOptions(['Unfurnished', 'Semi Furnished', 'Furnished'], furnishingType, setFurnishingType)}
          </View>
        </View>

        {/* Floor Details */}
        <Subheading text="Floor Details" />
        <FloorDetails />
        {/* Parking Details */}
        <Subheading text="Parking Details" />
        <CoveredParking />
        <OpenParking />

        {/* Availibility */}
        <View style={styles.optionContainer}>
          <Text style={styles.question}>Availibility</Text>
          <View style={styles.optionsRow}>
            {renderOptions(['Ready to Move', 'Under Construction'], availibility, setAvailibillity)}
          </View>
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

export default PropertyDetailComponent;
