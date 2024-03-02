import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetoWishlist } from '../redux/reducers/CartSlice';

const Favour = () => {

  const dispatch=useDispatch();

  const Item=useSelector(state=>state.Post.delta)
  console.log(Item,'+++++++++++++++++++++++++++++')
  return (
    <View style={{flex:1}}>
    <Text style={{fontSize:32,fontWeight:'700',marginTop:10,color:'black',textAlign:'center'}}>Welcome to wishList</Text>

    {
      Item.length>0?(<View>    
<FlatList
 data={Item}
 renderItem={({item,index})=>{
   return(
  

     <View style={{width:'95%',height:250,alignSelf:'center',borderRadius:10,marginTop:10,backgroundColor:'#fff',borderWidth:.4,borderColor:'#8e8e8e',elevation:3,marginBottom:Item.length-1==index?'40%':0}}>
     <Image source={item?.image} style={{width:'100%',height:190,borderRadius:10}}/>

     <Text style={{fontSize:20,fontWeight:'600',marginLeft:10,marginTop:6,color:'black'}}>{item?.name}</Text>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     <Text style={{fontSize:18,fontWeight:'300',marginLeft:10,color:'black'}}>{'Rs '+item?.price}</Text>
     <TouchableOpacity onPress={()=>dispatch(removetoWishlist(index))} style={{width:100,height:28,borderWidth:1,borderRadius:10,marginRight:20,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:16,color:'#8e8e8e'}}>{'Delete'}</Text>
     </TouchableOpacity>
     </View>

   
     
     </View>


   )
 }}
/>
</View>):(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:21,color:'black'}}>{'No Items Added in WishList'}</Text>
</View>)
    }

</View>
  )
}

export default Favour

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
    alignItems:'center'}

})