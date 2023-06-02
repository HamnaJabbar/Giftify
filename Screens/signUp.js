// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const signUp = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, this is a simple screen!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default signUp;

import React, { useState, useEffect } from 'react';
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const signUp = () => {
 
    // Perform sign up logic here
    

//import { useNavigation } from '@react-navigation/native';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const navigation = useNavigation();

 const handleSignUpPress = async () => {
    console.log('Signup clicked!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Handle Sign In');
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user data:', user);
        // Handle successful login, navigate to another screen, etc.
        //navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Please fill the textFields first and provide us required info');
        // Handle login error, display error message, etc.
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('useEffect to check sign IN', user.email);
        // navigation.reset({ index: 0, routes: [{ name: "Home" }] });
      }
    });
  }, []);

    //
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>We Welcome you the worlds of gift</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUpPress} color='#e3492b'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default signUp;
