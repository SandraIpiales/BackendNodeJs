import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { LaptopsList } from './screens/laptopsList';

export default function App() {
  const StackLaptops= createNativeStackNavigator();
  return (
   <NavigationContainer>
    <StackLaptops.Navigator>
      <StackLaptops.Screen name='LaptopListNav'
      component={LaptopsList}/>
    </StackLaptops.Navigator>
   </NavigationContainer>
  );
}

