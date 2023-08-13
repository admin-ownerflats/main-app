import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterBuyRentCommercial = () => {
  const [selectedFilter, setSelectedFilter] = useState('Buy');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'Buy' ? styles.activeFilter : null,
            styles.leftButton,
          ]}
          onPress={() => handleFilterChange('Buy')}
        >
          <Text style={styles.filterButtonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'Rent' ? styles.activeFilter : null,
            styles.middleButton,
          ]}
          onPress={() => handleFilterChange('Rent')}
        >
          <Text style={styles.filterButtonText}>Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'Commercial' ? styles.activeFilter : null,
            styles.rightButton,
          ]}
          onPress={() => handleFilterChange('Commercial')}
        >
          <Text style={styles.filterButtonText}>Commercial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent', // Set background to transparent
    // borderRadius: 20,
    borderWidth: 1, // Add a border to differentiate the buttons
    borderColor: '#ffcccb', // Border color
  },
  activeFilter: {
    backgroundColor: '#ffcccb', // Active filter background color
    borderColor: '#ffcccb', // Active filter border color
  },
  leftButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 15,
  },
  middleButton: {
    borderRadius: 0,
    marginRight: 15,
    marginLeft: 15,
  },
  rightButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 15,
  },
  filterButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default FilterBuyRentCommercial;
