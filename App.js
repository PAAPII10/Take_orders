import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'react-native';

import Splash from './Component/Screens/Splash';
import LoginScreen from './Component/LoginScreen';
import Main from './Component/Main';
import Header from './Component/Header'
import Product from './Component/ProductList';
import DrawerNav from './Component/Navigations/DrawerNav'



const Stack = createNativeStackNavigator();
// function HomeStack() {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      
//     </Stack.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();

const Auth = () => {
  
  
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNav}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




















// export default App;
// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator()


// function HomeStack() {
//   return (
    
    
//     <Drawer.Navigator >
//         <Drawer.Screen name="MainScreen" component={Main} />
//         <Drawer.Screen name="Header" component={Header} />
//         <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
//                 {/* <Drawer.Screen name="Home" component={HomeStack} /> */}
//     </Drawer.Navigator>

    
    
//   );
// }


// export default class App extends React.Component {
//   render() {
//     return (
      
        
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Login">
//                 <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
//                 <Stack.Screen name="MainScreen" component={Main} />
//                 <Drawer.Screen name="Home" component={MyDrawerNavigator} />
//             </Stack.Navigator>
    
       
            
//         </NavigationContainer>
      
//     );
//   }
// }