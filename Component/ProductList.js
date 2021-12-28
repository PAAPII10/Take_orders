import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput,SafeAreaView,
Button, Image, Alert, ScrollView,Pressable, TouchableOpacity, BackHandler
} from 'react-native';
import Constants from "expo-constants";
import { Picker } from '@react-native-picker/picker';
import Header from './Header'




class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pickervalue:"",



        }
    }
    componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
          
            
            return true;
          });
    }     

    render(){
        return(
            <SafeAreaView >
               
                <TouchableOpacity>
                <View style={{padding:10,backgroundColor:'#f2c334'}}/>
                <View style={styles.container}>
                    <Picker
                    style={{width:"100%",backgroundColor:"white"}}
                    selectedValue={this.state.pickervalue}
                    onValueChange={(itemValue,itemIndex)=>this.setState({pickervalue:itemValue})}
                    >
                        <Picker.Item label="Select Client Name" value=""  />
                        <Picker.Item label="Harry" value="java"  />
                        {/* <Picker.Item label="Chocolate Peanut Butter" value="html" />   */}

                    </Picker>
                    <View style={{padding:10}}/>
                    <Picker
                    style={{width:"100%",backgroundColor:"white"}}
                    selectedValue={this.state.pickervalue}
                    onValueChange={(itemValue,itemIndex)=>this.setState({pickervalue:itemValue})}
                    >
                        <Picker.Item label="Select Quantity" value=""  />
                        <Picker.Item label="100g" value="java"  />
                        <Picker.Item label="200g" value="html" />  
                        <Picker.Item label="350g" value="html" />  
                        <Picker.Item label="500g" value="html" />  
                        <Picker.Item label="1KG" value="html" />  

                    </Picker>
                    <View style={{padding:10}}/>
                    <Picker
                    style={{width:"100%",backgroundColor:"white"}}
                    selectedValue={this.state.pickervalue}
                    onValueChange={(itemValue,itemIndex)=>this.setState({pickervalue:itemValue})}
                    >
                        <Picker.Item label="Select Product" value=""  />
                        <Picker.Item label="Peanut Butter" value="java"  />
                        <Picker.Item label="Chocolate Peanut Butter" value="html" />  

                    </Picker>


                    <Pressable style={styles.button} >
                        <Text style={styles.text}>Place Order</Text>
                    </Pressable>
                    

                    


                </View>
                    {/* <View style={{padding:10}}/>
                <View>

                    
                </View> */}
                </TouchableOpacity>

            </SafeAreaView>
            
    
        )

    }
    
}

export default Product;

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#f2c334',
        height:"100%",
        
        
        
        
        
        
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        margin:10,
        borderRadius:10,

      },
      text: {
        fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    })    


    // <SafeAreaView styles={styles.container}>
                
    //              {/* <View >
    //                 <Header/>
                    
    //             </View>  */}
    //              <View >
                    
    //             </View>
                
                  
                
    //         </SafeAreaView>