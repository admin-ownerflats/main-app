import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

const WhyOwnerflatsView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Why Ownerflats ? </Text>
        <View style={styles.pointContainer}>
          <View style={styles.bulletPoint}>
            <Icon name="circle" size={10} color="#F8A055" style={styles.bulletIcon} />
            <Text style={styles.point}>No Brokerage</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Icon name="circle" size={10} color="#F8A055" style={styles.bulletIcon} />
            <Text style={styles.point}>100% Owner properties</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Icon name="circle" size={10} color="#F8A055" style={styles.bulletIcon} />
            <Text style={styles.point}>Get best customer support</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Icon name="circle" size={10} color="#F8A055" style={styles.bulletIcon} />
            <Text style={styles.point}>Curate your house hunt request</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Icon name="circle" size={10} color="#F8A055" style={styles.bulletIcon} />
            <Text style={styles.point}>Thousands of listed properties</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {/* Replace 'image.svg' with the actual SVG image */}
        <Svg width={100} height={100}>
          <SvgImage
            href={require('../assets/OwnerFlatsLogo.svg')}
            width="100%"
            height="100%"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8A055',
    marginBottom: 16,
  },
  pointContainer: {},
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletIcon: {
    marginRight: 8,
  },
  point: {
    fontSize: 16,
    color: '#555555',
  },
  imageContainer: {
    marginLeft: 20,
  },
});

export default WhyOwnerflatsView;
