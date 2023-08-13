import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FancyTagline = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taglineContainer}>
        <Image
          source={require('../assets/OwnerFlats.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.taglineText}>ZERO BROKERAGE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taglineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 5, // Space between the logo and tagline text
  },
  taglineText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Text color
    textTransform: 'uppercase', // Convert text to uppercase
  },
});

export default FancyTagline;
