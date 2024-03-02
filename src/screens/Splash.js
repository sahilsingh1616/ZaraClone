import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
const {width,height}=Dimensions.get('screen');

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
          navigation.navigate('Main');
        },3000)
          },[])
  return (


   <View style={{backgroundColor:'#fff'}}> 
    <ImageBackground resizeMode='contain' source={require('../../assets/images/men2.png')} style={{width:width/1,height:height/1.1}}>
    <View style={styles.container}>
    <Image source={require('../../assets/images/zara.png')} style={styles.icon}/>
</View>

<Text style={styles.txtcollect}>COLLECTION</Text>

<Text style={styles.txtcollect1}>FW 23 STUDIO COLLECTION</Text>
<Text style={styles.txtnow}>AVAILABLE NOW</Text>

<View style={styles.lastview}>
<Text style={{fontSize:11,fontWeight:'400',color:'black',marginRight:10}}>BUSCAR</Text>

</View>


    </ImageBackground>

    </View>

  )
}

export default Splash

const styles = StyleSheet.create({
   
    icon:{width:200,height:82},
    container:{
        marginLeft:10
    },
    txtcollect:{
        fontSize:21,color:'black',fontWeight:'600',marginTop:'20%',marginLeft:10
    },
    txtcollect1:{
        fontSize:29,color:'red',textAlign:'center',fontWeight:'800',marginTop:'30%'
    },
    txtnow:{
        fontSize:18,color:'white',fontWeight:'300',textAlign:'center'
    },
    lastview:{
        width:'94%',height:30,borderWidth:1,borderColor:'black',justifyContent:'center',alignItems:'flex-end',alignSelf:'center',marginTop:'80%'}
    
})