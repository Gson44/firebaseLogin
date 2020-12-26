import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAEYLI15FoY2uFd8ss3Ic57T-LaBTVQgnQ",
    authDomain: "photo-71c5e.firebaseapp.com",
    databaseURL: "https://photo-71c5e-default-rtdb.firebaseio.com",
    projectId: "photo-71c5e",
    storageBucket: "photo-71c5e.appspot.com",
    messagingSenderId: "31864388391",
    appId: "1:31864388391:web:314e19ea2483aa25a94702",
    measurementId: "G-76784P5LLE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function Login({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErr, setLoginErr] = useState(false)
    
    const loginFirebase = () => {
       var status = false
       var message;
        firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            console.log(error.code);
            console.log(error.message)
            message = error.message
            status = true
        }).then(()=>{
            if(status === false){
                alert('Success')
                navigation.navigate('Home')
            }else{
                alert(message)
            }
        })
    }

    return(
      
      <View style={styles.container}>
          <Text style={styles.title}>Welcome To Book Media</Text>
        <TextInput placeholder="Email" style={styles.inputStyle} onChangeText={value => setEmail(value)}/>
        <TextInput placeholder="Password" style={styles.inputStyle} onChangeText={value => setPassword(value)}/>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
              <Text>Registration</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.button} onPress={loginFirebase}>
              <Text>Login</Text>
          </TouchableOpacity>  
        </View>     
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

export default Login