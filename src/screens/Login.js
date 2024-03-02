import { Image,TextInput, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput'
import CommanButton from '../Common/CommanButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [badEmail,setBadEmail]=useState(false)
    const [badpassword,setBadPassword]=useState(false)

    const Validate=()=>{
        if(email==''){
            setBadEmail(true)

        } else{
            setBadEmail(false)

        }
        if(password==''){
            setBadPassword(true)
        } 
        else{
            setBadPassword(false)
        }

        GetData();
        
    }

    const GetData=async()=>{
        const memail=await AsyncStorage.getItem('Email')
        const mpassword=await AsyncStorage.getItem('Password')
        console.log(memail,mpassword)
    }
  return (
    <View style={styles.maincontainer}>
     <Image source={require('../../assets/images/zara.png')} style={styles.icon}/>

     <Text style={styles.title}>LOGIN</Text>

    <CustomTextInput value={email} onChangeText={(txt)=>setEmail(txt)} placeholder='Enter Email ID' icon={require('../../assets/images/email.png')}/>

    {
        badEmail=== true &&(<Text style={{fontSize:11,color:'red',marginLeft:38,marginTop:10}}>Please Enter Email properly</Text>)
    }
    <CustomTextInput value={password} onChangeText={(txt)=>setPassword(txt)} type={'password'} placeholder='Enter Password' icon={require('../../assets/images/lock.png')}/>

    {
        badpassword=== true &&(<Text style={{fontSize:11,color:'red',marginLeft:38,marginTop:10}}>Please Enter password properly</Text>)
    }

    <CommanButton title={'Login'} color={'#000'} textcolor={'#fff'} onPress={()=>Validate()} />


    <Text onPress={()=>navigation.navigate('SignUp')} style={styles.txt}>Create a new Account</Text>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    icon:{
        width:200,height:100,alignSelf:'center',marginTop:100
    },
    title:{
        fontSize:28,color:'red',fontWeight:'700',alignSelf:'center',marginTop:30
    },
    emailinput:{
         width:'85%',
         height:50,
         borderWidth:.5,
         alignSelf:'center',
         borderRadius:10,
         marginTop:50,
         paddingLeft:10,
         color:'black'
    },
    txt:{
        fontSize:18,color:'#8e8e8e', fontWeight:'700',alignSelf:'center',marginTop:20,textDecorationLine:'underline'
    }
})