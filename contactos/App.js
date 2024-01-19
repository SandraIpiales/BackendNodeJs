import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";//Esquema de Navegacion 
import {ContactsList} from "./screens/ContacsList"

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen name="ContacsListNav"
        component={ContactsList}
        />
      </StackContacts.Navigator>

    </NavigationContainer>
  );
}


