import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../Screens/HomeScreen';
import welcome from '../Screens/welcome';



const Stack = createNativeStackNavigator();

const appNavigation = () => {
  return (
        <NavigationContainer>
       <Stack.Navigator initialRouteName='welcome'>
       <Stack.Screen options={{headerShown:false}} name="welcome" component={welcome} />
       <Stack.Screen options={{headerShown:false}} name="HomeScreen" component={HomeScreen}/>
       
        </Stack.Navigator>
        </NavigationContainer>
       

  )
}

export default appNavigation

