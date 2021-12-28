import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput,SafeAreaView,
Button, Image, Alert, ScrollView
} from 'react-native';
import Constants from "expo-constants";

class Header extends React.Component {
    render(){
        return(
            <View style={{marginTop:"6%"}}>
                  <View style={{backgroundColor: '#7ebc43',flexDirection:"row",
                justifyContent:"center",padding:8,height:70,elevation:10}}>   
                    <Image
                        style={{
                        height:30,width:"35%",marginTop:10}}
                        source={require("../assets/Head.png")}
                    />
                </View>   
                
            </View>
    
        )

    }
    
}

export default Header;