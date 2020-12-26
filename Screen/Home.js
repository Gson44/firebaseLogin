import React, {useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Data from '../Data'
import firebase from 'firebase'

function Home({navigation}){

  

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            alert('Logout Succefully')
            navigation.navigate('Login')
        })
        
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title="signout" onPress={signOut}/>
        })
    })

   
    return(
      <View style={styles.container}>
        <FlatList data={Data} renderItem={({item}) => 
               <View style={styles.card}>
                    <Text>{item.name}</Text>
                    <Text>{item.category} | {item.rating}</Text>
                </View>      
            } />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6b150',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    card: {
        height: 150,
        borderWidth: 1,
        width: 250,
        
        padding:10,
        margin: 10
    }
   
  });

export default Home