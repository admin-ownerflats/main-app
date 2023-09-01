import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OpenParking = () => {
  const [parkingCount, setParkingCount] = useState(0);

  const incrementCount = () => {
    setParkingCount(parkingCount + 1);
  };

  const decrementCount = () => {
    if (parkingCount > 0) {
      setParkingCount(parkingCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>No of Open Parking</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={decrementCount}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>{parkingCount}</Text>
        <TouchableOpacity style={styles.button} onPress={incrementCount}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    marginBottom: 
    
    8,
  },
  label: {
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OpenParking;
