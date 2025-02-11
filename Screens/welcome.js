import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
 const navigation=useNavigation();

  return (
    <View style={styles.header}>
      <StatusBar style="light" />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
          <Image  source={require('../assets/pasta.png')} style={styles.image} />
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Fooe-d</Text>
        <Text style={styles.subtitle}>
          You don't need a silver fork to eat good food
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#faebd7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: wp(60), // Keeps the outer shape round
    padding: hp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: wp(65), // Increased size
    height: wp(65),
    borderRadius: wp(32.5), // Half of width/height for a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: wp(55), // Increased image size
    height: wp(55),
  },
  textContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: hp(5),
    color: '#cd5c5c',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: hp(1.5),
    marginTop: 5,
  },
});
