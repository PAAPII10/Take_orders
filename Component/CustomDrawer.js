import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer'
import {  Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const logout =(props)=>{
    
    Alert.alert(
        'Logout',
        'Are you sure? You want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: () => {
              AsyncStorage.clear();
              navigation.navigate('Auth');
            },
          },
        ],
        {cancelable: false},
      );
}

const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} 
            contentContainerStyle={{backgroundColor:"#d6e02c"}}>
                <ImageBackground source={require('../assets/background.png')}
                style={{padding:20}}>
                    <Image source={require('../assets/Profile.jpg')} 
                    style={{width:80,height:80,borderRadius:40, marginBottom:10}}/>
                    <Text style={{color:"black",fontSize:18}}>Vishal Chaurasia</Text>

                </ImageBackground>
                <View style={{flex:1, backgroundColor:"#fff", paddingTop:10,
                       }}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1,
            borderTopColor:"#ccc"}}>
                <TouchableOpacity
                style={{paddingVertical:15}}
                onPress={()=>{}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Entypo name="help-with-circle" size={22} color="black" />
                    <Text style={{fontSize:15, marginLeft:5}}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={{paddingVertical:15}}
                onPress={() => {
                    Alert.alert(
                      'Logout',
                      'Are you sure? You want to logout?',
                      [
                        {
                          text: 'Cancel',
                          onPress: () => {
                            return null;
                          },
                        },
                        {
                          text: 'Confirm',
                          onPress: () => {
                            AsyncStorage.clear();
                            props.navigation.replace('Auth');
                          },
                        },
                      ],
                      {cancelable: false},
                    )
                }}
                >
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Entypo name="log-out" size={22} color="black" />
                    <Text style={{fontSize:15, marginLeft:5, fontWeight:"500"}}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )    
}

export default CustomDrawer
