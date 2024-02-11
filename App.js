import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import DirectionLayout from './directionLay';
import Flex from './flex';
import FlexLay from './flexLay';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LotsOfStyles from './lotsOfStyles';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="lay" component={FlexLay} />
        <Stack.Screen name="direct" component={DirectionLayout} />
      </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
