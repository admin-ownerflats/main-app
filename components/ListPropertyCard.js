import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ListPropertyCard = () => {
  const navigation = useNavigation();

  const handleListPropertyPress = () => {
    // Handle the "List Property" button press here
    navigation.navigate("ListProperty");
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/HomeImage.jpg')} style={styles.homeImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.messageText}> - Pay Zero Brokerage</Text>
        <Text style={styles.messageText}> - Verified Tenants</Text>
        <TouchableOpacity style={styles.listPropertyButton} onPress={handleListPropertyPress}>
          <Text style={styles.listPropertyButtonText}> LIST PROPERTY </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8A055',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    marginBottom: 25,
    marginTop: 10
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  homeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  messageText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  listPropertyButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  listPropertyButtonText: {
    color: '#F8A055',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ListPropertyCard;
