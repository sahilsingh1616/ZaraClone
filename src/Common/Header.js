import { StyleSheet, Text, TouchableOpacity, View,Dimensions,Image } from 'react-native'
import React, { useEffect, useRef } from 'react';




const Header = () => {
    const ref=useRef();
  return (
    <View style={styles.contanier}>
    <View style={{marginLeft:20}}>
      <Text style={{fontSize:42,color:'black',fontWeight:'bold'}}>Zara</Text>
      
      <Text style={{fontSize:15,color:'black',fontWeight:'300'}}>India Best Brand</Text>
</View>
 

 <TouchableOpacity style={{width:100,height:40,backgroundColor:'red',borderRadius:20,marginRight:30,justifyContent:'center',alignItems:'center'}}>
 <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>Shop Now</Text>


 </TouchableOpacity>



    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    contanier:{
        width:'100%',
        height:70,
        backgroundColor:'white',
        flexDirection:'row',
        borderBottomWidth:.2,
        borderBottomColor:'#8e8e8e',
        justifyContent:'space-between',
        alignItems:'center'
    }
})