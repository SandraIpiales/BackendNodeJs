import {View, Text,StyleSheet,FlatList} from "react-native"
import {Button, ListItem} from "@rneui/base"
import {getAllContacts} from "../rest_client/contactos"
import { useState } from "react"

export const ContactsList=()=>{
  const [contactsList,setContactsList]= useState([
       
        ]);
    fnRefreshList=(contacts)=>{
      console.log("Refrescar Lista", contacts);
      setContactsList(contacts);
    }
    const ContactItem=({contact})=>{
      return <ListItem>
      <ListItem.Content>
        <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
        <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    }
    return <View>
        <Text>LISTA DE CONTACTOS</Text>
        <Button
        title="Consultar"
        onPress={()=>{
          getAllContacts(fnRefreshList);
        }}
        />
        <FlatList 
        data={contactsList}
        renderItem={({item})=>{
          return <ContactItem contact={item}/>          
        }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });