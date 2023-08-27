// ListingPage.js
import React, { useState } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import PropertyDetailComponent from './ListingForm/PropertyDetailComponent';
import PricingDetailsComponent from './PricingDetailsComponent';
import AmenitiesComponent from './AmenitiesComponent';
import BasicDetailsForm from './ListingForm/BasicDetailsForm';

const ListingPage = () => {
  const [step, setStep] = useState(1);
  // ... other state variables to hold form data

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit the data and show a success message
      // You would need to implement this part
      // For demonstration, I'm using a simple toast
      ToastAndroid.show('Your property listing is successful', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      {step === 1 && <BasicDetailsForm onNext={handleNext} />}
      {step === 2 && <PropertyDetailComponent onNext={handleNext} />}
      {step === 3 && <PricingDetailsComponent onNext={handleNext} />}
      {step === 4 && <AmenitiesComponent onSubmit={handleNext} />}
    </View>
  );
};

export default ListingPage;