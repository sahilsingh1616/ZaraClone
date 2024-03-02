import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native';

const Example2 = ({navigation}) => {
    const isFocused=useFocusEffect();

    const [contactList,setContactList]=useState([])
    //console.log(route)
const [sahil,setSahil]=useState('')
const [singh,setSingh]=useState('')

useEffect(()=>{
GetData()
},[isFocused])


    const GetData=async()=>{
        const Contact=await AsyncStorage.getItem('CONTACT')
       
console.log(JSON.parse(Contact))
        setContactList(JSON.parse(Contact))
      

    }
    
  return (
    <View style={{flex:1,backgroundColor:'#99F1FF'}}>

    <FlatList
    data={contactList}
        renderItem={({item,index})=>{
            return(
                <View style={{width:'90%',height:40,borderWidth:1}}>
                </View>
            )
        }}
    />

    <TouchableOpacity onPress={()=>navigation.navigate('AddContact')} style={{width:200,height:50,borderRadius:30,backgroundColor:'black',justifyContent:'center',alignItems:'center',position:'absolute',bottom:40,right:10}}>
    <Text style={{fontSize:18,color:'white',fontWeight:'500'}}>Add New Contact</Text>

    </TouchableOpacity>

  
    </View>
  )
}

export default Example2

const styles = StyleSheet.create({})