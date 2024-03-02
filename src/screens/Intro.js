import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Intro = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{

            CheckLogin()
    
        },3000)
    })

    const CheckLogin=async()=>{
        const email=await AsyncStorage.getItem('Email')
        const pass =await AsyncStorage.getItem('Password')
       if( email!==null || email!==undefined || email!==''){
              navigation.navigate('Example2')
       }else{
        navigation.navigate('Example1')
       }

    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'yellow'}}>
      <Text style={{fontSize:32,color:'black',fontWeight:'800'}}>MY DAILER LIST</Text>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})