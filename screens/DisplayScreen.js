import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { Card} from 'react-native-elements';
import MyHeader from "../components/MyHeader";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";


export default class DisplayScreen extends React.Component{

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


  componentDidMount() {
    this.getUserDetails();
  }

  render(){
    return(
      <View>
        <View >
          <MyHeader title="Display Screen" navigation={this.props.navigation} />
        </View>


        <View>

          <Card>
            <Text> First Name : {this.state.firstName}</Text>
            <TouchableOpacity  style={styles.button}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </Card>

          <Card>
            <Text> Last Name: {this.state.lastName}</Text>
            <TouchableOpacity  style={styles.button}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </Card>

          <Card>
            <Text> Address: {this.state.address}</Text>
            <TouchableOpacity  style={styles.button}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </Card>

          <Card>
            <Text> Age: {this.state.age}</Text>
            <TouchableOpacity  style={styles.button}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </Card>


          <Card>
            <Text> Contact: {this.state.contact}</Text>
            <TouchableOpacity  style={styles.button}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </Card>

        </View>

      </View>



    )
  }

 }

 const styles = StyleSheet.create({
   button:{
    width: "20%",
    height: RFValue(30),
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
    elevation: 16,
    marginLeft: RFValue(200)
  }
 })