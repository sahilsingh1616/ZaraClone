import { Image,TextInput, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CommanButton from '../Common/CommanButton'


let isValid=true;
const SignUp = ({navigation}) => {


    const [name,setName]=useState(' ')
    const [badName,setBadName]=useState(false)

    const [email,setEmail]=useState('')
    const [badEmail,setBadEmail]=useState(false)

    const [mobile,setMobile]=useState('')
    const [badMobile,setBadMobile]=useState(false)

    const [password,setPassword]=useState('')
    const [badPassword,setBadPassword]=useState(false)

    
    const [confirmpassword,setConfirmPassword]=useState('')
    const [badConfrimPassword,setBadConfirmPassword]=useState(false)

    const [butnDisabled,setButtonDisabled]=useState(false)


    const Handler=()=>{
        setButtonDisabled(true)
        if (name==''){
            setBadName(true)
            isValid=false
        }else{
            setBadName(false)
        }

        if (email==''){
            setBadEmail(true)
            isValid=false
        }else{
            setBadEmail(false)
        }

        if (mobile==''){
            setBadMobile(true)
            isValid=false
        }else if(mobile.length<10){
            setBadMobile(true)

        }else{
            setBadMobile(false)
        }

        if (password==''){
            setBadPassword(true)
            isValid=false
        }else{
            setBadPassword(false)
        }

        if (confirmpassword==''){
            setBadConfirmPassword(true)
            isValid=true
        }else{
            setBadConfirmPassword(false)
        }


        if (password!==confirmpassword){
            setBadConfirmPassword(true)
            isValid=false
        }else{
            setBadConfirmPassword(false)
        }

        setTimeout(()=>{
            if (isValid==true){
                SaveData()
            }
   

            else{
                setButtonDisabled(false)
            }

        },2000)


    }

    const SaveData=async()=>{
            await AsyncStorage.setItem('Name',name);
            await AsyncStorage.setItem('Email',email);
            await AsyncStorage.setItem('Mobile',mobile);
            await AsyncStorage.setItem('Password',password)
            console.log(SaveData,"++++++++++++++++++++++++")
            // await AsyncStorage.setItem('ConfirmPassword',confirmpassword)
navigation.goBack()

        

    }


  return (

    <ScrollView style={{flex:1,marginBottom:20}}>
    <View style={styles.maincontainer}>
     <Image source={require('../../assets/images/zara.png')} style={styles.icon}/>

     <Text style={styles.title}>Create a new Account</Text>

     <CustomTextInput value={name} onChangeText={(txt)=>setName(txt)} placeholder='Enter Name' icon={require('../../assets/images/name.png')}/>
     {
        badName=== true &&(<Text style={{fontSize:11,color:'red',marginLeft:38,marginTop:4}}>Please Enter Name properly</Text>)
    }

    <CustomTextInput value={email} onChangeText={(txt)=>setEmail(txt)} placeholder='Enter Email ID' icon={require('../../assets/images/email.png')}/>
    {
        badEmail=== true &&(<Text style={{fontSize:11,color:'red',marginLeft:38,marginTop:4}}>Please Enter E-mail properly</Text>)
    }
    <CustomTextInput  value={mobile} KeyboardType={'number-pad'} onChangeText={(txt)=>setMobile(txt)} placeholder='Enter Mobile' icon={require('../../assets/images/phone.png')} />
    {
        badMobile=== true &&(<Text style={{fontSize:11,color:'red',marginLeft:38,marginTop:4}}>Please Enter Mobile Number</Text>)
    }

    <CustomTextInput value={password}  onChangeText={(txt)=>setPassword(txt)} type={'password'} placeholder='Enter Password' icon={require('../../assets/images/lock.png')}/>
    {
        badPassword=== true &&(<Text style={{fontSize:11,color:'red',marginLeft:38,marginTop:4}}>Please Enter Password properly</Text>)
    }
    <CustomTextInput  value={confirmpassword} onChangeText={(txt)=>setConfirmPassword(txt)} placeholder='Enter Confirm Password' icon={require('../../assets/images/lock.png')} />
    {
        badConfrimPassword=== true &&(<Text style={{fontSize:11,color:'red',marginLeft:38,marginTop:4}}>Please Enter ConfrimPassword properly</Text>)
    }

    <CommanButton title={'Sign Up'} color={butnDisabled?'#8e8e8e':'#000'} textcolor={'#fff'} onPress={()=>Handler()} disabled={butnDisabled} />



    <Text onPress={()=>navigation.goBack()} style={styles.txt}>Already have Account</Text>

    </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    icon:{
        width:200,height:100,alignSelf:'center',marginTop:100
    },
    title:{
        fontSize:28,color:'red',fontWeight:'700',alignSelf:'center',marginTop:30
    },
    emailinput:{
         width:'85%',
         height:50,
         borderWidth:.5,
         alignSelf:'center',
         borderRadius:10,
         marginTop:50,
         paddingLeft:10,
         color:'black'
    },
    txt:{
        fontSize:18,color:'#8e8e8e', fontWeight:'700',alignSelf:'center',marginTop:20,textDecorationLine:'underline'
    }
})