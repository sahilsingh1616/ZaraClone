import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


let Contacts=[];

const AddContact = ({navigation}) => {
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('')

const SaveContact=async()=>{
    let tempContact=[];
     let x= JSON.parse(await AsyncStorage.getItem('CONTACT'))

     tempContact.map(item=>{
    Contacts.push(item)
    console.log(item)
   

     });
     Contacts.push({name:name,mobile:mobile})
      await AsyncStorage.setItem('CONTACTS',JSON.stringify(Contacts))
      navigation.goBack()


// let tempContact=[];
// let x=JSON.parse(await AsyncStorage.getItem('CONTACT'));
// tempContact=x
// tempContact.map(item=>{
//     Contacts.push(item)
// });
// Contacts.push({name:name,mobile:mobile})
// await AsyncStorage.setItem('CONTACT',JSON.stringify(Contacts))
// navigation.goBack();


}

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <TextInput value={name} onChangeText={(txt)=>setName(txt)} placeholderTextColor='black' placeholder='ENTER NAME' style={{padding:10,borderRadius:10,borderWidth:.5,fontSize:15,color:'black',width:'90%',height:50,backgroundColor:'white'}}/>
<TextInput value={mobile} onChangeText={(txt)=>setMobile(txt)} keyboardType='number-pad' placeholderTextColor='black' placeholder='ENTER NUMBER' style={{padding:10,borderRadius:10,borderWidth:.5,marginTop:30,fontSize:15,color:'black',width:'90%',height:50,backgroundColor:'white'}}/>

<TouchableOpacity onPress={()=>SaveContact()}  style={{width:'90%',height:50,justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'black',marginTop:'10%'}}>
<Text style={{fontSize:20,fontWeight:'600',color:'white'}}>Login</Text>
</TouchableOpacity>
    </View>
  )
}

export default AddContact

const styles = StyleSheet.create({})