// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const Home = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>Hello this is home screena!</Text>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   text: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default Home;


// import React from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const Home = ({ navigation }) => {
//   const handleLoginPress = () => {
//     navigation.navigate('signUp');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, this is the home screen!</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLoginPress} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default Home;








// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { auth } from './firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const Home = ({ navigation }) => {
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
 
  

  

  
//   const handleLoginPress = async () => {
   
//       console.log('Login clicked!');
//       console.log('Email:', email);
//       console.log('Password:', password);
//       console.log('Handle Sign In');
//       await signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           console.log('user data:', user);
          
          
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.log('Error:', errorMessage);
          
//         });
    

    
//   };

//   const handleSignUpPress = () => {
//     navigation.navigate('signUp');
//   };

//   const handleResetPress = () => {
    
//   };
//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         console.log('useEffect to check sign IN', user.email);
        
//       }
//     });
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, this is the home screen!</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={setPassword}

//       />
//       <Button title="Login" onPress={handleLoginPress} />
//       <Text style={styles.label}>Forgot Password?</Text>
//       <Button title="Reset" onPress={handleResetPress} />
//       <Text style={styles.label}>Don't have an account?</Text>
//       <Button title="Sign Up" onPress={handleSignUpPress} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   label: {
//     marginTop: 10,
//     marginBottom: 5,
//   },
// });

// export default Home;





// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet , TouchableOpacity } from 'react-native';
// import { auth } from './firebase';
// import { signInWithEmailAndPassword , signInAnonymously } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleLoginPress = async () => {
//     console.log('Login clicked!');
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Handle Sign In');

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log('user data:', user);
      
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'Main' }],
//       });
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert('Failed to login:', errorMessage);
//     }
//   };

//   const handleSignUpPress = () => {
//     navigation.navigate('signUp');
//   };

//   const handleResetPress = () => {
//     // Perform reset logic here
//   };


//   const signInGuest = async () => {
    
//     await signInAnonymously(auth).then((userCredential)=>{
//       console.log('Done',userCredential)
//     })

//   }

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         console.log('useEffect to check sign IN', user.email);
//         navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
//       }
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>GIFTIFY!</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLoginPress} color="#FB6F92"  />
//       <Text style={styles.label}>Forgot Password?</Text>
//       <Button title="Reset" onPress={handleResetPress} />
//       <Text style={styles.label}>Don't have an account?</Text>
//       <Button title="Sign Up" onPress={handleSignUpPress} />

      
//       <View style={{ flex: 0.1 }}>
//         <TouchableOpacity
//           onPress={() => {signInGuest()
//             navigation.navigate('Main');
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//              // fontFamily: "Poppins-SemiBold",
//               marginTop: 16,
//               color: "darkgrey",
//             }}
//           >
//             Guest User
//           </Text>
//         </TouchableOpacity>
//       </View>


//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//     paddingHorizontal: 20,
//   },
  
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   label: {
//     marginTop: 10,
//     marginBottom: 5,
//   },
// });

// export default Home;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { auth } from './firebase';
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLoginPress = async () => {
    console.log('Login clicked!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Handle Sign In');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('user data:', user);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Failed to login:', errorMessage);
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('signUp');
  };

  const handleResetPress = () => {
    // Perform reset logic here
  };

  const signInGuest = async () => {
    await signInAnonymously(auth).then((userCredential) => {
      console.log('Done', userCredential);
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('useEffect to check sign IN', user.email);
        navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>GIFTIFY!</Text>
      <Image source={require('../assets/G9.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLoginPress} color="#FB6F92" />
      <Text style={styles.label}>Forgot Password?</Text>
      <Button title="Reset" onPress={handleResetPress} />
      <Text style={styles.label}>Don't have an account?</Text>
      <Button title="Sign Up" onPress={handleSignUpPress} />

      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
          onPress={() => {
            signInGuest();
            navigation.navigate('Main');
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              // fontFamily: "Poppins-SemiBold",
              marginTop: 16,
              color: 'darkgrey',
            }}
          >
            Guest User
          </Text>
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
    backgroundColor: 'orange',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;

 


