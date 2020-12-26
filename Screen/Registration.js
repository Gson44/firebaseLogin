import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import firebase from 'firebase'



function Registration({ navigation }){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [regError, setregError] = useState(false)
    const register = () => {
       const status =  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
            console.log(error.code);
            console.log(error.message);
            alert('Registration Error!')
            setregError(true)
        }).then(()=> {
            if(regError === false){
                var userRef = firebase.database().ref("User/")
                 userRef.push({
                name:name,
                email:email,
                password:password
            })
            alert('Registration Complete!')
            navigation.navigate('Login')
            }
            
        })
        
    }
    
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <TextInput placeholder="Name" style={styles.inputStyle} onChangeText={name => {
            setName(name)
        }} value={name}/>
        <TextInput placeholder="Email" style={styles.inputStyle} onChangeText={email=> {
            setEmail(email)}} value={email}/>
        <TextInput placeholder="Password" style={styles.inputStyle} onChangeText={password => {
            setPassword(password)}} value={password}/>
        <TouchableOpacity style={styles.button} onPress={register}>
              <Text>Register</Text>
          </TouchableOpacity> 
          
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6b150',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        paddingTop: 50
    },
    inputStyle: {
      height:30,
      width:250,
      borderWidth: 1,
      margin:10,
    }, 
    buttonGroup: {
      flexDirection:'row'
    },
    button: {
      margin:10,
      borderWidth: 1,
      height:30,
      width:100,
      padding:3,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    title: {
      fontSize: 30,
      color: 'white',
     
    }
  });

export default Registration