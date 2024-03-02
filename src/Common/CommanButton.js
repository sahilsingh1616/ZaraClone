import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CommanButton = ({onPress,title,color,textcolor,size,weight,disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={()=>onPress()} style={{backgroundColor:color,width:'85%',marginTop:50,height:50,borderRadius:10,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:textcolor,fontSize:20,fontWeight:'500'}}>{title}</Text>

    </TouchableOpacity>
  )
}

export default CommanButton

const styles = StyleSheet.create({})