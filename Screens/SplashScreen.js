// import React, { useEffect } from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate('Home');
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [navigation]);

//   const screenWidth = Dimensions.get('window').width;
//   const screenHeight = Dimensions.get('window').height;

//   return (
//     <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
//       <Image
//         source={require('../assets/Splash.png')}
//         resizeMode="cover"
//         style={styles.logo}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'blue',
//   },
//   logo: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default SplashScreen;


import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
      <Image
        source={require('../assets/Splash.png')}
        resizeMode="cover"
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
