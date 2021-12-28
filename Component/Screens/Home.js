import React from "react";
import { View, Text, StatusBar, BackHandler, TextPropTypes } from "react-native";





class Home extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
          
            
            return true;
          });
    }     


    render(){
        return(
            <View style={{marginTop:StatusBar.currentHeight}} >
                <Text>
                    Hello
                </Text>
            </View>
        )
    }
}

export default Home;