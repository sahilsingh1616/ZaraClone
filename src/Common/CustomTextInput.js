import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CustomTextInput = ({value,onChangeText,placeholder,icon,type,KeyboardType}) => {
    const [text,setText]=useState(value)
  return (
    <View style={{width:'85%',height:50,borderWidth:.5,borderRadius:10,alignSelf:'center',flexDirection:'row',marginTop:30,alignItems:'center',paddingLeft:20,paddingRight:20}}>
    <Image source={icon}style={{width:27,height:27}}/>

    <TextInput

         keyboardType={KeyboardType?KeyboardType:'default'}
        placeholder={placeholder}
        value={value}
        onChangeText={(txt)=>{
            onChangeText(txt)
        }}
        placeholderTextColor='#8e8e8e'
        maxLength={60}
        secureTextEntry={type ? true:false}
        style={{marginLeft:10,width:'93%',color:'black'}}
    />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})