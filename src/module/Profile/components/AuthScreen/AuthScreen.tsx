import React,{useState} from 'react';
import {View, Text, Button, TextInput,Alert,Image} from 'react-native';

import styles from './AuthScreen.styles';


type AuthScreenProps = any;

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const echo =  (message:string)=>{
    Alert.alert(message)
  }
  
  const clickHandler = async () => {
    if (email.length == 0) {
      echo ("Пустой email")
       return;
    }
    if (password.length == 0) {
      echo ("Пустой пароль")
      return;
    }

    const data = {email: email, password: password}
    let response = await fetch('http://192.168.0.4:5000/login',{
      mode: "no-cors",
      method:"POST",
      body: JSON.stringify({data}),
      headers:{
        "Content-Type": "application/json",
      }
    })
    const json = await response.json()

    if(json.jwt){
      navigation.navigate('Main');
    }
  };
  const imageUri = {uri:'https://www.gnivc.ru/design/www/images/ico/logo.png'}
  return (
    <View style={styles.component}>
      <Image style={styles.img} source={imageUri} />
      <TextInput style={styles.input} placeholder="Login" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title="Enter" onPress={clickHandler} />
    </View>
  );
};

export default AuthScreen;
