import React, { Component } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { Header, Icon } from "react-native-elements";

export default class ResetPassword extends Component {

  constructor() {
      super();
      this.state={
          emailId:""
      }
  }

  resetPassword=(Email)=>{
        firebase.auth().sendPasswordResetEmail(Email)
        .then(function (user) {
            alert('Please check your email...')
        }).catch(function (e) {
            console.log(e)
        })
    }

  render(){
      return(
          <View style={{flex:1, justifyContent:"center"}}>

              <View style={{ flex: 1 }}>
                  <Header
                        leftComponent={
                        <Icon
                            name="arrow-left"
                            type="feather"
                            color="#ffffff"
                            onPress={() => this.props.navigation.navigate("WelcomeScreen")}
                        />
                        }
                        centerComponent={{
                        text: "Reset Password",
                        style: {
                            color: "#ffffff",
                            fontSize: RFValue(20),
                            fontWeight: "bold",
                        },
                        }}
                        backgroundColor="#40C4FF"
                    />
                </View>


                <View style = {{
                    flex:4,
                    alignItems:"center"
                }}>

                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter email address"
                    placeholderTextColor="grey"
                    keyboardType="email-address"
                    onChangeText={text => {
                        this.setState({
                          emailId: text
                        });
                    }}
                />
           
           <TouchableOpacity style={styles.button}
           onPress={()=>
                     this.resetPassword(this.state.emailId)
                     }>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>

                </View>

          </View>

      )
  }
}

const styles = StyleSheet.create({
    textInput:{
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#E0F7FA",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
    },
    button:{
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#E0F2F1",
        shadowColor: "#000",
        marginTop:RFValue(30),
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
   }
})