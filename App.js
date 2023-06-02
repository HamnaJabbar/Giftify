
import { StyleSheet, View } from 'react-native';
 import SplashScreen from  './Screens/SplashScreen';
 import Home from './Screens/Home';
 import signUp from './Screens/signUp';
 import Main from './Screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen 
  name="SplashScreen" 
  component={SplashScreen} 
  options={{
    headerStyle: { backgroundColor: '#e3492b' },
   headerTitleStyle: { color: 'white' }
  }} 
/>

        <Stack.Screen name="Home" 
        component={Home}
        options={{
          headerStyle: { backgroundColor: '#FF8B28' },
         headerTitleStyle: { color: 'white' }
        }} />

        <Stack.Screen name="signUp"
        component={signUp}
        options={{
          headerStyle: { backgroundColor: '#FF8B28' },
         headerTitleStyle: { color: 'white' }
        }} />

        <Stack.Screen name="Main"
        component={Main}
        options={{
          headerStyle : {backgroundColor : '#FF8B28'},
          headerTitleStyle : { color : 'white' }


        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3492b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

