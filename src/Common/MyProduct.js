import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useDeferredValue } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtoWishlist, addtocart } from '../redux/reducers/CartSlice';
const {width,height}=Dimensions.get('screen');

const MyProduct = ({item}) => {

    //console.log(item)

    // const Item=useSelector(state=>state.post)
   // const zara=useSelector(state=>state.post)
    

    const dispatch=useDispatch();
    const addItem=(item)=>{
        dispatch(addtocart(item))
       // console.log(item,'++++++++++++++++++++++++++++++++')
    }
    const addFavour=(item)=>{
        dispatch(addtoWishlist(item))
        console.log(item)
    }
  return (
    <View style={styles.container}>
     <Image source={item?.image} style={styles.shirticon}/>
     <Text style={styles.shirtname}>{item.name}</Text>

     <View style={styles.priceView}>
     <Text style={styles.pricetxt}>{'Rs'+' '+item.price}</Text>

     <TouchableOpacity onPress={()=>addItem(item)}  style={{width:80,height:38,backgroundColor:'#52FA0E',justifyContent:'center',alignItems:'center',borderRadius:20,padding:10}}>
     <Text style={{fontSize:12,color:'black'}}>{'Add to Cart'}</Text>

     </TouchableOpacity>

     </View>
     <TouchableOpacity onPress={()=>addFavour(item)}  style={styles.favourView}>
     <Image source={require('../../assets/images/heartline.png')} style={{width:20,height:20}}/>

     </TouchableOpacity>
    </View>
  )
}

export default MyProduct

const styles = StyleSheet.create({
    container:{
        width:180,paddingBottom:10,marginLeft:10,backgroundColor:'#fff',elevation:2,borderRadius:20,marginBottom:10
    },
    shirticon:{width:width/2.2,height:height/4.5,borderRadius:10,alignSelf:'center'},
    shirtname:{fontSize:13,fontWeight:'600',color:'#000',marginTop:10,textAlign:'center'},
    priceView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:20,
        marginTop:10

    },
    pricetxt:{
fontSize:18,fontWeight:'600',color:'#8e8e8e'
    },
    favourView:{
        width:40,
        height:40,
        backgroundColor:'#fff',
        position:'absolute',
        top:10,
        left:10,
        elevation:3,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    }
})