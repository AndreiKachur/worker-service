import React,{useEffect,useCallback,useState} from 'react';
import { View, Text,Image } from 'react-native';

import styles from './ProfileScreen.styles';

type ProfileScreenProps = {};
type UserInfo = {
  id:string;
  name:string,
  avatar:string
}

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  const [user,setUser] = useState<UserInfo>();
  
  const getUserInfo = useCallback(async()=>{
    const name = 'Артем'
    const response = await fetch('http://192.168.0.4:5000/getInfo',{
      mode: "no-cors",
      method:"POST",
      body: JSON.stringify({name}),
      headers:{
        "Content-Type": "application/json",
      }
    })
    const json= await response.json()
    setUser(json)
  },[user,setUser])

  useEffect(()=>{getUserInfo()},[])
  console.log(user)
  return(
  <View style={styles.component}>
    {
    user &&
    <>
      <Image source={{uri:user.avatar}} ></Image>
      <Text>{user.name}</Text>
    </>
    }
  </View>
  );
};

export default ProfileScreen;
