import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput,Image, Pressable,
 Alert, BackHandler, ScrollView, ImageBackground, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, FontAwesome } from '@expo/vector-icons';



global.my = 10;

export default class LoginScreen extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
     
      email : '',
      password : '',
      secureTextEntry : true,
      iconName:"eye",
    };
  }

  iconPress=()=>{
    
  }

  passwordIcon=()=>{
    let iconName=(this.state.secureTextEntry) ? "eye-off" : "eye";
    this.setState({
      secureTextEntry:!this.state.secureTextEntry,
      iconName: iconName,
      
    })
  }
      
        
          

    
  

  backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }
  
  
  

  InsertRecord=()=>{
    global.email = this.state.email;
    var Password = this.state.password;

    if ((global.email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "https://nutritwizz.in/api/user.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Email: global.email,
        Password: Password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        if (Response[0].Message == "Success") {
          // AsyncStorage.setItem('user_id', Response[0].data.email);
          // console.log(Response[0].data.email);
          // navigation.replace('DrawerNavigationRoutes');
          // console.log("true")
          
            
        
          this.props.navigation.navigate("DrawerNavigationRoutes",{
            P1:global.email
          });
        }
        else{
          Alert.alert(Response[0].Message)
        }
        console.log(Data);
        // ,{P1:this.state.email}
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })
      
    }
  }

  // updateSecureTextEntry(){
  //   this.setState({
  //     ...this.state,
  //     secureTextEntry: !this.state.secureTextEntry
  //   });
  // }


  

  
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
          source={require("../assets/Logo.png")}
          style={{resizeMode:"center",width:"100%",height:"100%"}}></Image>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#05375a"
                size={20}
              />
              <TextInput style={styles.textinput}
            placeholder="Enter Email"
            autoCapitalize="none"
            // placeholderTextColor="#ff0000"   
            onChangeText={email=>this.setState({email})}
            returnKeyType = {"next"}
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            />
            
            
             
            </View>
            <Text style={[styles.text_footer,
            {marginTop:35}]}>Password</Text>
            <View style={styles.action}>
              <Feather
                name="lock"
                color="#05375a"
                size={20}
              />
            <TextInput style={styles.textinput}
            placeholder="Enter Password"
            // placeholderTextColor="#ff0000"
            secureTextEntry={this.state.secureTextEntry}
            onChangeText={password=>this.setState({password})}
            onSubmitEditing={()=>this.InsertRecord()}
            ref={(input) => { this.secondTextInput = input; }}
          />
          <TouchableOpacity
          onPress={()=>this.passwordIcon()}
          >
            <Feather
              name={this.state.iconName}
              color="grey"
              size={20}
              />
           </TouchableOpacity>   
            </View>
            <View style={styles.button}>
              
                <Pressable
                onPress={()=>this.InsertRecord()}
                style={styles.signIn}
                >
                  <Text style={[styles.textSign,{color:"white"}]}>Login</Text>
                </Pressable>
              
            </View>

        </View>
      </View>

      
        
        /* <View>
          <TextInput style={styles.TextInput}
            placeholder="Enter Email"
            placeholderTextColor="#ff0000"   
            onChangeText={email=>this.setState({email})}
            returnKeyType = {"next"}
            autoFocus = {true}
            
          />
        </View>
        <View>
          <TextInput style={styles.TextInput}
            placeholder="Enter Password"
            placeholderTextColor="#ff0000"
            secureTextEntry={this.state.secureTextEntry ? true : false}
            onChangeText={password=>this.setState({password})}
            onSubmitEditing={()=>this.InsertRecord()}
            ref={(input) => { this.secondTextInput = input; }}
          />
         

        </View>
        <View>
          

            <Pressable style={styles.button} >
              <Text style={styles.text}>Login</Text>
            </Pressable>
        </View> */
          

      
      // </View>
      
       
   );

  }

};

    




const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#cde261"
      // marginTop:StatusBar.currentHeight 
      },
      Imagebg:{
        
        height:Dimensions.get('window').height/2.5,
        backgroundColor: '#cde261', 
        // justifyContent:"center",
        // alignItems:"center"       
      },
      Logoimg:{
        flex:1,
        width:"100%"
        
        
        
        
        
        // height:100,
        // width:"50%",
        // marginBottom:10,
        // marginTop:"30%",
        
      },
      header:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,
        paddingVertical:30

      },
      footer:{
        flex:3,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,

      },
      text_header:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:30,

      },
      text_footer:{
        color:"black",
        fontSize:18,
        fontWeight:"bold"
      },
      action:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5,
      },
      textinput:{
        flex:1,
        marginTop: Platform.OS == "ios" ? 0 : -12,
        paddingLeft:10,
        color:"#05375a",
        

      },
      button:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        backgroundColor:"green",
        borderRadius:10,
        width:"50%",
        marginLeft:"28%"

      },
      signIn:{
        width:"100%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
      },
      textSign:{
        fontSize:18,
        fontWeight:"bold",
        

      },
    
      TextInput:{
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize:20,
        color:'black',
        backgroundColor:"#fff",
        borderRadius: 10,
        
      },
      Button: {
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


