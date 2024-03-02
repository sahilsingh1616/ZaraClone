import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import { removeCart } from '../redux/reducers/CartSlice'

const CartList = () => {
  const dispatch=useDispatch();
  const Sahil=useSelector(state=>state.Post.value)
  //console.log(Sahil)
  return (

    <View style={{flex:1}}>
        
        
           <Text style={{fontSize:32,fontWeight:'700',marginTop:10,color:'black',textAlign:'center'}}>Welcome to Store</Text>

           {
            Sahil.length>0?(   <View>    
      <FlatList
        data={Sahil}
        renderItem={({item,index})=>{
          return(
         

            <View style={{width:'95%',height:250,alignSelf:'center',borderRadius:10,marginTop:10,backgroundColor:'#fff',borderWidth:.4,borderColor:'#8e8e8e',elevation:3,marginBottom:Sahil.length-1==index?'40%':0}}>
            <Image source={item?.image} style={{width:'100%',height:190,borderRadius:10}}/>

            <Text style={{fontSize:20,fontWeight:'600',marginLeft:10,marginTop:6,color:'black'}}>{item?.name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:18,fontWeight:'300',marginLeft:10,color:'black'}}>{'Rs '+item?.price}</Text>
            <TouchableOpacity onPress={()=>dispatch(removeCart(index))} style={{width:100,height:28,borderWidth:1,borderRadius:10,marginRight:20,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:16,color:'#8e8e8e'}}>{'Delete'}</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity  style={styles.favourView}>
     <Image source={require('../../assets/images/heartline.png')} style={{width:20,height:20}}/>

     </TouchableOpacity>
            
            </View>


          )
        }}
      />
    </View>):(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:21,color:'black'}}>{'No Items Added in Cart'}</Text>

    </View>)
           }
   
    </View>
   
  )
}

export default CartList

const styles = StyleSheet.create({
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