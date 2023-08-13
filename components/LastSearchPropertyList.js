import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { houseProperties } from '../assets/sampleData/filteringData';

const LastSearchPropertyList = ({ lastSearchedCity }) => {
  const data = houseProperties.filter(property => property.city === lastSearchedCity);

  const renderItem = ({ item }) => {
    const { city, image, rooms, facing, address } = item;

    return (
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.rooms}>Rooms: {rooms}</Text>
        <Text style={styles.facing}>Facing: {facing}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    );
  };

  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.row}>
          {item.slice(0, 2).map(property => (
            <View key={property.id} style={styles.cardContainer}>
              {renderItem({ item: property })}
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {item.slice(2, 4).map(property => (
            <View key={property.id} style={styles.cardContainer}>
              {renderItem({ item: property })}
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Similar Properties in {lastSearchedCity}</Text>
      <Text style={styles.text}>Especially curated based on your last search</Text>
      <FlatList
        data={paginate(data, 4)}
        renderItem={renderSlide}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={(Dimensions.get('window').width - 40) / 2}
        snapToAlignment="start"
      />
    </View>
  );
};

const paginate = (array, page_size) => {
  return array.reduce((acc, val, i) => {
    const idx = Math.floor(i / page_size);
    const page = acc[idx] || (acc[idx] = []);
    page.push(val);
    return acc;
  }, []);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  text: {
    color: '#777', // Grey color
    fontSize: 14, // Adjust the font size as needed
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  slide: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardContainer: {
    width: (Dimensions.get('window').width - 40) / 2,
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  city: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  rooms: {
    fontSize: 14,
    marginBottom: 2,
  },
  facing: {
    fontSize: 14,
    marginBottom: 2,
  },
  address: {
    fontSize: 14,
    color: '#444',
  },
});

export default LastSearchPropertyList;
