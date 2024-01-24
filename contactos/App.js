import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";//Esquema de Navegacion 
import {ContactsList} from "./screens/ContacsList"
import { ContactsForm} from "./screens/ContactsForm";

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="ContacsFormNav">
        <StackContacts.Screen name="ContacsListNav"
        component={ContactsList}
        />
         <StackContacts.Screen name="ContacsFormNav"
        component={ContactsForm}
        />
      </StackContacts.Navigator>

    </NavigationContainer>
  );
}


