import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Home from './screens/Home';
import Search from './screens/Search';
import CartList from './screens/CartList';
import Favour from './screens/Favour';
import User from './screens/User';
import { useSelector } from 'react-redux';

const Main = ({navigation}) => {
    const [selectedTab,setSelectedTab]=useState(0);

   const data=useSelector(state=>state.Post.value)
   const  Fill=useSelector(state=>state.Post.delta)
   //console.log(data,'fffffffffffffffffffffffffff')
  return (
    <View style={styles.mainContainer}>
         {
            selectedTab==0?(<Home/>):selectedTab==1?(<Search/>):selectedTab==2?(<CartList/>):selectedTab==3?(<Favour/>):(<User navigation={navigation}/>)
         }
    <View  style={styles.container}>
    <TouchableOpacity onPress={()=>setSelectedTab(0)} style={styles.touch}>
    <Image source={require('../assets/images/home.png')} style={[styles.icon,{tintColor:selectedTab==0?'black':'#8e8e8e'}]}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setSelectedTab(1)} style={styles.touch}>
    <Image source={require('../assets/images/search.png')} style={[styles.icon,{tintColor:selectedTab==1?'black':'#8e8e8e'}]}/>
    </TouchableOpacity>


<View style={{width:'20%',height:'100%',justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={()=>setSelectedTab(2)} style={[styles.touch,{width:70,height:70,backgroundColor:'#fff',marginTop:-70,borderRadius:50,justifyContent:'center',alignItems:'center'}]}>
    <Image source={require('../assets/images/wishlist.png')} style={[styles.icon,{tintColor:selectedTab==2?'black':'#8e8e8e'}]}/>
    <View style={{width:16,height:16,backgroundColor:'red',borderRadius:10,position:'absolute',top:8,right:15,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:10,color:'white',fontWeight:'600'}}>{data?.length}</Text>

    </View>
    </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={()=>setSelectedTab(3)} style={styles.touch}>
    <Image source={require('../assets/images/favourite.png')} style={[styles.icon,{tintColor:selectedTab==3?'black':'#8e8e8e'}]}/>
    <View style={{width:16,height:16,backgroundColor:'red',borderRadius:10,position:'absolute',top:13,right:18,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:10,color:'white',fontWeight:'600'}}>{Fill?.length}</Text>

    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setSelectedTab(4)} style={styles.touch}>
    <Image source={require('../assets/images/user.png')} style={[styles.icon,{tintColor:selectedTab==4?'black':'#8e8e8e'}]}/>
    </TouchableOpacity>


    </View>
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
    mainContainer:{flex:1,backgroundColor:'white'},
    container:{
        width:'100%',height:70,backgroundColor:'aqua',position:'absolute',bottom:0,flexDirection:'row',alignItems:'center',borderTopLeftRadius:20,borderTopRightRadius:20
    },
    touch:{
        width:'20%',height:'100%',justifyContent:'center',alignItems:'center'
    },
    icon:{
        width:30,
        height:30,
    
    }


})