// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Main= () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello main!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default Main;



// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// const Main = () => {
//   const [gender, setGender] = React.useState('');
//   const [age, setAge] = React.useState('');
//   const [interest, setInterest] = React.useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello main!</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Gender"
//         value={gender}
//         onChangeText={setGender}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={age}
//         onChangeText={setAge}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Interest"
//         value={interest}
//         onChangeText={setInterest}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     width: 200,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default Main;


// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// const Main = () => {
//   const [gender, setGender] = React.useState('');
//   const [age, setAge] = React.useState('');
//   const [interest, setInterest] = React.useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Let's get started</Text>
//       {/* <Text style={styles.text}>Hello main!</Text> */}
//       <TextInput
//         style={styles.input}
//         placeholder="Gender"
//         value={gender}
//         onChangeText={setGender}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={age}
//         onChangeText={setAge}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Interest"
//         value={interest}
//         onChangeText={setInterest}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightpink',
//   },
//   label: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     width: 200,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default Main;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// const Main = () => {
//   const [recipientName, setRecipientName] = useState('');
//   const [recipientAge, setRecipientAge] = useState('');
//   const [occasion, setOccasion] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleRecommendation = () => {
//     // Implement your recommendation logic here based on the user's inputs
//     // You can use the recipientName, recipientAge, occasion, and budget variables to generate recommendations
//     // Display the recommendations to the user in some way
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Yahoo!Now let's get started :)</Text>

//       <Text style={styles.label}>Recipient's Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={recipientName}
//         onChangeText={setRecipientName}
//         placeholder="Enter recipient's name"
//       />

//       <Text style={styles.label}>Recipient's Age:</Text>
//       <TextInput
//         style={styles.input}
//         value={recipientAge}
//         onChangeText={setRecipientAge}
//         placeholder="Enter recipient's age"
//         keyboardType="numeric"
//       />

//       {/* <Text style={styles.label}>Occasion:</Text>
//       <TextInput
//         style={styles.input}
//         value={occasion}
//         onChangeText={setOccasion}
//         placeholder="Enter the occasion"
//       /> */}

//       <Text style={styles.label}>Budget:</Text>
//       <TextInput
//         style={styles.input}
//         value={budget}
//         onChangeText={setBudget}
//         placeholder="Enter your budget"
//         keyboardType="numeric"
//       />

//       <Button title="Recommend Gifts" onPress={handleRecommendation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     backgroundColor: '',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//   },
// });

// export default Main;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

// const Main = () => {
//   const [recipientName, setRecipientName] = useState('');
//   const [recipientAge, setRecipientAge] = useState('');
//   const [occasion, setOccasion] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleRecommendation = () => {
//     // Implement your recommendation logic here based on the user's inputs
//     // You can use the recipientName, recipientAge, occasion, and budget variables to generate recommendations
//     // Display the recommendations to the user in some way
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/G2.png')} style={styles.image} resizeMode="cover" />

//       <Text style={styles.heading}>Yahoo! Now let's get started :)</Text>

//       <Text style={styles.label}>Recipient's Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={recipientName}
//         onChangeText={setRecipientName}
//         placeholder="Enter recipient's name"
//       />

//       <Text style={styles.label}>Recipient's Age:</Text>
//       <TextInput
//         style={styles.input}
//         value={recipientAge}
//         onChangeText={setRecipientAge}
//         placeholder="Enter recipient's age"
//         keyboardType="numeric"
//       />

//       {/* <Text style={styles.label}>Occasion:</Text>
//       <TextInput
//         style={styles.input}
//         value={occasion}
//         onChangeText={setOccasion}
//         placeholder="Enter the occasion"
//       /> */}

//       <Text style={styles.label}>Budget:</Text>
//       <TextInput
//         style={styles.input}
//         value={budget}
//         onChangeText={setBudget}
//         placeholder="Enter your budget"
//         keyboardType="numeric"
//       />

//       <Button title="Recommend Gifts" onPress={handleRecommendation} color="pink" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'orange',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//   },
// });

// export default Main;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, Image, SafeAreaView } from 'react-native';

// const Main = () => {
//   const [recipientName, setRecipientName] = useState('');
//   const [recipientAge, setRecipientAge] = useState('');
//   const [occasion, setOccasion] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleRecommendation = () => {
//     // Implement your recommendation logic here based on the user's inputs
//     // You can use the recipientName, recipientAge, occasion, and budget variables to generate recommendations
//     // Display the recommendations to the user in some way
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Image source={require('../assets/G2.png')} style={styles.image} resizeMode="cover" />

//       <Text style={styles.heading}>Yahoo! Now let's get started :)</Text>

//       <Text style={styles.label}>Recipient's Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={recipientName}
//         onChangeText={setRecipientName}
//         placeholder="Enter recipient's name"
//       />

//       <Text style={styles.label}>Recipient's Age:</Text>
//       <TextInput
//         style={styles.input}
//         value={recipientAge}
//         onChangeText={setRecipientAge}
//         placeholder="Enter recipient's age"
//         keyboardType="numeric"
//       />

//       {/* <Text style={styles.label}>Occasion:</Text>
//       <TextInput
//         style={styles.input}
//         value={occasion}
//         onChangeText={setOccasion}
//         placeholder="Enter the occasion"
//       /> */}

//       <Text style={styles.label}>Budget:</Text>
//       <TextInput
//         style={styles.input}
//         value={budget}
//         onChangeText={setBudget}
//         placeholder="Enter your budget"
//         keyboardType="numeric"
//       />

//       <Button title="Recommend Gifts" onPress={handleRecommendation} color="pink" />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'orange',
//     padding: 16,
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '50%',
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//   },
// });

// export default Main;


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, SafeAreaView, Dimensions } from 'react-native';

const Main = () => {
  const [recipientName, setRecipientName] = useState('');
  const [recipientAge, setRecipientAge] = useState('');
  const [occasion, setOccasion] = useState('');
  const [budget, setBudget] = useState('');

  const handleRecommendation = () => {
    // Implement your recommendation logic here based on the user's inputs
    // You can use the recipientName, recipientAge, occasion, and budget variables to generate recommendations
    // Display the recommendations to the user in some way
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/G3.png')} style={[styles.image, { width: windowWidth, height: windowHeight }]} resizeMode="cover" />

      <Text style={styles.heading}>Yahoo! Now let's get started :)</Text>

      <Text style={styles.label}>Recipient's Name:</Text>
      <TextInput
        style={styles.input}
        value={recipientName}
        onChangeText={setRecipientName}
        placeholder="Enter recipient's name"
      />

      <Text style={styles.label}>Recipient's Age:</Text>
      <TextInput
        style={styles.input}
        value={recipientAge}
        onChangeText={setRecipientAge}
        placeholder="Enter recipient's age"
        keyboardType="numeric"
      />

      {/* <Text style={styles.label}>Occasion:</Text>
      <TextInput
        style={styles.input}
        value={occasion}
        onChangeText={setOccasion}
        placeholder="Enter the occasion"
      /> */}

      <Text style={styles.label}>Budget:</Text>
      <TextInput
        style={styles.input}
        value={budget}
        onChangeText={setBudget}
        placeholder="Enter your budget"
        keyboardType="numeric"
      />

      <Button title="Recommend Gifts" onPress={handleRecommendation} color="pink" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 16,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

export default Main;
