import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput,SafeAreaView,
Pressable, Image, ScrollView, KeyboardAvoidingView
} from 'react-native';
import * as Location from 'expo-location'
import { TouchableOpacity } from 'react-native-gesture-handler';



global.latitude = "";
global.longitude = "";
global.link = "";
// global.empName=this.props.navigation.state.params.P1

export default class Main extends Component {
  

  constructor(props){
    super(props);
    
    this.state={
      PartyName:'',
      salesmanName:'',
      mobileNo:'',
      address:'',
      gstNo:'',
      remark:'',
      lastRefresh: Date(Date.now()).toString(),
      
      

    };
    this.refreshScreen = this.refreshScreen.bind(this);
    this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.setState({is_updated:true});
      }
    );
  }

  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() })
  }



  updateState(location) {
    this.setState({
      ...this.state,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  async componentDidMount() {
    
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if(status!=="granted"){
        setErrorMessage("Access to location is needed to  run app")
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords
      
      
      global.latitude=latitude
      global.longitude=longitude

      global.link = "https://www.google.com/maps/place/"+global.latitude+','+global.longitude
      
      
    } catch (error) {
      
    }
  } 
  
  

  InsertRecord=()=>{
    var EmpName=global.email;
    var PartyName=this.state.PartyName;
    var salesmanName=this.state.salesmanName; 
    var mobileNo=this.state.mobileNo; 
    var address=this.state.address; 
    var gstNo=this.state.gstNo; 
    var remark=this.state.remark;
    

    if(PartyName.length==0 || salesmanName.length==0 || mobileNo.length==0 || address.length==0 || remark.length==0){
      alert("required is field is missiing");
    }
    else{
      var InsertAPIURL="https://nutritwizz.in/api/insert.php";

      var headers={
        'Accept' : 'application/json',
        'Content-Type' : 'application.json'

      };
      var Data={
        EmpName:EmpName,
        PartyName:PartyName,
        SalesmanName:salesmanName,
        MobileNo:mobileNo,
        Address:address,
        GSTNo:gstNo,
        Remark:remark,
        Link:global.link,
      }
      fetch(InsertAPIURL,
        {
          method:'POST',
          headers:headers,
          body: JSON.stringify(Data)
        }
      )
      .then((response)=>response.json())
      .then((response)=>
      {
        alert(response[0].Message);
        

      })
      .catch((error)=>
      {
        alert("Error"+error);
      })
    }

  }

  
  

 render(){
  const { navigate } = this.props.navigation;
  return (
    <KeyboardAvoidingView
      style={{flex:1}}
      enabled={true}
      behavior="height"
    
    
    >
      <ScrollView>
        <SafeAreaView style={styles.container}>
          
          <View style={{flexDirection:"row"}}>
            <Image style={styles.imagestyle}
              source={require("../assets/Logo.png")}
            />
            <TouchableOpacity style={{marginTop:"60%"}}
              onPress={ ()=>navigate("LoginScreen")  }>
          
              <Text style={{fontSize:20,fontWeight:"bold",color:"red"}}></Text>
            </TouchableOpacity>
          </View>
            <StatusBar style="auto" />
            <View >
              <TextInput
              style={styles.TextInput}
              value={global.email}
              editable={false}
              placeholderTextColor={'black'}
              
              />
              <TextInput style={styles.TextInput}
                placeholder="Company Name*"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="words"
                keyboardType="default"
                returnKeyType="next"
                autoFocus = {true}
                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                onChangeText={PartyName=>this.setState({PartyName})}/>
        
              <TextInput style={styles.TextInput}
                placeholder="Contact Person Name*"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={salesmanName=>this.setState({salesmanName})}
                returnKeyType="next"
                ref={(input) => { this.secondTextInput = input; }}
                onSubmitEditing={() => { this.thirdTextInput.focus(); }}
              />
                
              <TextInput style={styles.TextInput}
                placeholder="Mobile No*."
                placeholderTextColor="#8b9cb5"
                autoCapitalize="words"
                keyboardType="number-pad"
                maxLength={10}
                returnKeyType="next"
                onChangeText={mobileNo=>this.setState({mobileNo})}
                ref={(input) => { this.thirdTextInput = input; }}
                onSubmitEditing={() => { this.fourthTextInput.focus(); }}
              />
        
              <TextInput style={styles.addstyle}
                placeholder="Address*"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="words"
                keyboardType="default"
                returnKeyType="next"
                multiline
                numberOfLines={3}
                onChangeText={address=>this.setState({address})}
                ref={(input) => { this.fourthTextInput = input; }}
                onSubmitEditing={() => { this.fifthTextInput.focus(); }}
              />
              
              <TextInput style={styles.TextInput}
                placeholder="GST No.(optional)"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="words"
                keyboardType="default"
                returnKeyType="next"
                onChangeText={gstNo=>this.setState({gstNo})}
                ref={(input) => { this.fifthTextInput = input; }}
                onSubmitEditing={() => { this.sixthTextInput.focus(); }}
              />
        
              <TextInput style={styles.addstyle}
                placeholder="Remark*"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="words"
                keyboardType="default"
                multiline
                returnKeyType="go"
                onSubmitEditing={()=>this.InsertRecord()}
                numberOfLines={3}
                ref={(input) => { this.sixthTextInput = input; }}
                onChangeText={remark=>this.setState({remark})}
              />


              <View style={{justifyContent:"center",
                alignItems:"center",
                marginTop:10,
                backgroundColor:"green",
                borderRadius:15,
                width:"50%",
                marginLeft:"28%"}}>
              <Pressable style={{width:"100%",
                height:50,
                justifyContent:"center",
                alignItems:"center",
                borderRadius:10,}}
                onPress={()=>this.InsertRecord()}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>
                    Submit</Text>
              </Pressable>
              </View>
              <View>
              <Pressable style={{width:"100%",
                height:50,
                justifyContent:"center",
                alignItems:"center",
                borderRadius:10,}}
                onPress={()=>this.refreshScreen()}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>
                    Fill New Details</Text>
              </Pressable>

              </View>
            </View>
        
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
 }
  
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f2c334',
    // alignItems: 'center',
    // justifyContent: 'center',
    flex:1,
    
  },
  TextInput:{   
    borderRadius: 10,   
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize:16,
    color:'black',
    backgroundColor:"#fff"
      
    
  },
  buttonTextStyle: {
      padding:20,
    borderRadius:10,
    paddingVertical: 10,
    fontSize: 16,
    
  },
  imagestyle:{
    resizeMode:"center",
    height:100,
    width:"50%",
    marginBottom:10,
    marginTop:10,
    marginLeft:'25%'
    
  },
  addstyle:{
    height: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize:20,
    color:'black',
    borderRadius: 10,
    backgroundColor:"#fff"
  }
});
