import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const User = ({navigation}) => {
  let name='Sahil'
  useEffect(()=>{
    getData()

  },[])

  const getData=async()=>{
    name=await AsyncStorage.getItem('NAME')

  } 

  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
      <Text style={styles.txt}>Profile</Text>

      <TouchableOpacity style={styles.imageView}>
      <Image source={require('../../assets/images/setting.png')} style={styles.icon}/>

      </TouchableOpacity>

      </View>
      <Image source={require('../../assets/images/sort.png')} style={styles.icon2}/>

      <Text style={{fontSize:22,color:'black',fontWeight:'600',alignSelf:'center',marginTop:30}}>{name}</Text>

      <TouchableOpacity  onPress={()=>navigation.navigate('MyAddress')} style={styles.AddressTouch}>
      <Text style={{fontSize:14,color:'#8e8e8e',marginLeft:20}}>{'My Address'}</Text>

      </TouchableOpacity>
      <TouchableOpacity style={[styles.AddressTouch,{marginTop:10}]}>
      <Text style={{fontSize:14,color:'#8e8e8e',marginLeft:20}}>{'My Orders'}</Text>

      </TouchableOpacity>

      <TouchableOpacity style={[styles.AddressTouch,{marginTop:10}]}>
      <Text style={{fontSize:14,color:'#8e8e8e',marginLeft:20}}>{'Offers'}</Text>

      </TouchableOpacity>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container:{
    flex:1,backgroundColor:'white'
  },
  profileView:{
    width:'100%',
    height:70,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  txt:{
    fontSize:25,color:'black',fontWeight:'700',marginLeft:20
  },
  imageView:{
    width:40,height:40,
    marginRight:30,
    justifyContent:'center',alignItems:'center'
  },
  icon:{
    width:30,height:30
  },
  icon2:{
    width:130,height:130,
    alignSelf:'center',marginTop:30
  },
  AddressTouch:{
    width:'90%',height:50,borderBottomWidth:.3,alignSelf:'center',marginTop:40,borderBottomColor:'#8e8e8e',justifyContent:'center'
  }
})