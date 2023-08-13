// Import necessary components and data
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { propertyData } from '../assets/sampleData/PropertyData';

const PropertyListScreen = () => {
  const handleExplorePress = property => {
    console.log('Explore more:', property);
    // Implement the action to navigate to property details screen or perform other actions here.
  };

  const renderPropertyCard = ({ item }) => {
    const { image, rooms, parking, area, toilets, gated } = item;

    return (
      <TouchableOpacity style={styles.card} onPress={() => handleExplorePress(item)}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>Number of Rooms: {rooms}</Text>
          <Text style={styles.details}>Parking Available: {parking}</Text>
          <Text style={styles.details}>Nearby Area: {area}</Text>
          <Text style={styles.details}>Toilets: {toilets}</Text>
          <Text style={styles.details}>Gated Society: {gated ? 'Yes' : 'No'}</Text>
        </View>
        <TouchableOpacity style={styles.exploreButton} onPress={() => handleExplorePress(item)}>
          <Text style={styles.exploreButtonText}>Explore more about this property</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={propertyData}
        renderItem={renderPropertyCard}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  details: {
    marginBottom: 8,
    fontSize: 16,
    color: '#444',
  },
  exploreButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PropertyListScreen;
