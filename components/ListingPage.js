// ListingPage.js
import React, { useState } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import PropertyDetailComponent from './ListingForm/PropertyDetailComponent';
import BasicDetailsForm from './ListingForm/BasicDetailsForm';
import PricingDetails from './ListingForm/PricingDetails';
import AmenitiesDetails from './ListingForm/AmenitiesDetails';

import { useNavigation } from "@react-navigation/native";


const ListingPage = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  // ... other state variables to hold form data

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit the data and show a success message
      // You would need to implement this part
      // For demonstration, I'm using a simple toast
      navigation.navigate("Home");
      ToastAndroid.show('Your property listing is successful', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      {step === 1 && <BasicDetailsForm onNext={handleNext} />}
      {step === 2 && <PropertyDetailComponent onNext={handleNext} />}
      {step === 3 && <PricingDetails onNext={handleNext} />}
      {step === 4 && <AmenitiesDetails onSubmit={handleNext} />}
    </View>
  );
};

export default ListingPage;