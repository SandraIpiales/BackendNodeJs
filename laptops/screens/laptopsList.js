import {View, Text, StyleSheet,FlatList} from "react-native"
import {Button, ListItem} from "@rneui/base"
import {getAllLaptops} from "../rest_client/laptops"
import {useState} from 'react'

export const LaptopsList=()=>{
    const [laptopsList,setLaptosList] = useState([

    ]);
    fnRefreshList =(laptops)=>{

        setLaptosList(laptops);
    }
    const LaptopItem=({laptops})=>{
        return <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptops.marca} </ListItem.Title>
          <ListItem.Subtitle>{laptops.proceso}</ListItem.Subtitle>
          <ListItem.Subtitle>{laptops.memoria} - {laptops.disco}</ListItem.Subtitle>

        </ListItem.Content>
      </ListItem>
    }
    return <View>
        <Text>LISTA DE LAPTOPS</Text>
        <Button 
        title="Consultar"
        onPress={()=>{
            getAllLaptops(fnRefreshList);
        }}
        />
        <FlatList
        data={laptopsList}
        renderItem={({item})=>{
            return <LaptopItem laptops={item}/>
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
  