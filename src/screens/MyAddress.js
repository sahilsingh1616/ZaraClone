import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const MyAddress = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.profileView}>
    <Text style={styles.txt}>My Profile</Text>

    <TouchableOpacity onPress={()=>navigation.navigate('AddAddress')} style={styles.imageView}>
   <Text style={{fontSize:15,color:'black',fontWeight:'400'}}>{'Add Address'}</Text>

    </TouchableOpacity>

    </View>
   
  </View>
  )
}

export default MyAddress

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
        width:100,height:30,borderWidth:.4,
        marginRight:30,
        justifyContent:'center',alignItems:'center',borderRadius:20
      },
      icon:{
        width:30,height:30
      },
})