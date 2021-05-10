import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Picker
} from "react-native";
import MyHeader from "../components/MyHeader";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import {
  SafeAreaView
} from 'react-native-safe-area-context';


export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      age:"",
      hobbies:"",
      docId: "",
      choosenIndex:0
    };
  }


  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection("users")
      .where("email_id", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            contact: data.contact,
            age:data.age,
            hobbies:data.hobbies,
            docId: doc.id,
          });
        });
      });
  };

  updateUserDetails = () => {
    db.collection("users").doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      contact: this.state.contact,
      age:this.state.age,
      hobbies:this.state.hobbies
    });

    Alert.alert("Profile Updated Successfully");
  };

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 0.12 }}>
          <MyHeader title="Home" navigation={this.props.navigation} />
        </View>

   
          <ScrollView style={styles.scrollView} bounces={false}>
          <KeyboardAvoidingView behavior="padding">
            <View
              style={{
                padding: RFValue(10),
              }}>

              <Text style={styles.label}>First Name </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"First Name"}
                maxLength={12}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
                value={this.state.firstName}
              />

              <Text style={styles.label}>Last Name </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Last Name"}
                maxLength={12}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
                value={this.state.lastName}
              />

              <Text style={styles.label}>Contact </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Contact"}
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
                value={this.state.contact}
              />

              <Text style={styles.label}>Address </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Address"}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
                value={this.state.address}
              />
              
              
              <Text style={styles.label}>Age </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Age"}
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={(text) => {
                  this.setState({
                    age: text,
                  });
                }}
                value={this.state.age}
              />

              <Text style={styles.label}>Hobby </Text>
              <Picker
                style={styles.pickerstyles}
                selectedValue = {this.state.language}
                onValueChange={(
                  itemValue, itemPosition
                ) => this.setState({
                  language: itemValue, 
                  choosenIndex: itemPosition, 
                  hobbies: itemValue
                })}
              >
                <Picker.Item label="Reading" value="reading"/>
                <Picker.Item label="Dancing" value="dancing"/>
                <Picker.Item label="Singing" value="singing"/>
                <Picker.Item label="Coding" value="coding"/>
                <Picker.Item label="Painting" value="painting"/>
                <Picker.Item label="Writing" value="writing"/>
                <Picker.Item label="Photography" value="photography"/>
                <Picker.Item label="Gardening" value="gardening"/>
                <Picker.Item label="Cooking" value="cooking"/>
              </Picker>


            </View>
          
      

            <View style={styles.buttonView}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.updateUserDetails();
                  }}
                >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#6fc0b8"
  },
  scrollView:{
    flex: 1,
  },
  label:{
    fontSize:RFValue(18),
    color:"#0277BD",
    fontWeight:'bold',
    padding:RFValue(10),
    marginLeft:RFValue(20)
  },
  formTextInput: {
    width: "90%",
    height: RFValue(50),
    padding: RFValue(10),
    borderWidth:1,
    borderRadius:2,
    borderColor:"grey",
    marginBottom:RFValue(20),
    marginLeft:RFValue(20)
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#E0F2F1",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  buttonView:{
    flex: 0.22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: RFValue(50)
},
  buttonText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#0277BD",
  },
  pickerstyles:{
    marginLeft:RFValue(20)
   
  }
});
