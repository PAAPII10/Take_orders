import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//Screens
import Home from '../Screens/Home';
import Main from '../Main';
import Product from '../ProductList';
import CustomDrawer from '../CustomDrawer';

const Drawer = createDrawerNavigator();
const Drawers =() =>{
    
    return(

        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{headerShown:false,
            drawerActiveBackgroundColor:"#74b645",
            drawerActiveTintColor: "#fff",
            drawerInactiveTintColor:"#333", 
            drawerLabelStyle:{marginLeft:-25,
            fontSize:15, }}}>
            <Drawer.Screen name="Home Page" component={Home} options={{
                drawerIcon: ({color})=>(
                    <Entypo name="home" size={22} color={color} />
                )
            }}/>
            {/* <Drawer.Screen name="Home" component={HomeStack} options={{headerShown: false}}/> */}
            <Drawer.Screen name="Client Detail" component={Main} options={{
                drawerIcon: ({color})=>(
                    <AntDesign name="form" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Product List" component={Product} 
            options={{
                drawerIcon: ({color})=>(
                    <Entypo name="shopping-cart" size={22} color={color} />
                )
            }}
            />
        </Drawer.Navigator>
    )
}

export default Drawers;
