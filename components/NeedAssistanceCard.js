import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; // Import the FontAwesome and FontAwesome5 icon libraries

const NeedAssistanceCard = () => {
  const phoneNumber = '+918369480924'; // Replace this with the actual contact number

  const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleWhatsAppPress = () => {
    Linking.openURL(`whatsapp://send?text=Hello&phone=${phoneNumber}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Need Assistance?</Text>
            <Text style={styles.contactNumber}>{phoneNumber}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
              <FontAwesome5 name="phone" size={20} color="white" style={styles.callButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsAppPress}>
              <FontAwesome5 name="whatsapp" size={22} color="white" style={styles.whatsappButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    marginBottom: 80,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fd5c63',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  phoneIcon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  contactNumber: {
    fontSize: 14,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  callButton: {
    flexDirection: 'row',
    borderRadius: 50,
    paddingVertical: 8,
    marginRight: 10,
  },
  callButtonIcon: {
    marginRight: 5,
  },
  callButtonText: {
    color: '#F8A055',
    fontSize: 14,
    fontWeight: 'bold',
  },
  whatsappButton: {
    flexDirection: 'row',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  whatsappButtonIcon: {
    marginRight: 5,
  },
  whatsappButtonText: {
    color: '#F8A055',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NeedAssistanceCard;
