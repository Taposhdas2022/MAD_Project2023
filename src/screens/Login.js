import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



const Login =(props) =>{


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          
          <Text style={{ fontSize: 40 }}>Doctor Appointment</Text>
          <View style={styles.inputView}>
           
            <TextInput
              style={styles.TextInput}
              placeholder="Username/Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            /> 
          </View> 

          <View style={styles.inputView}
          > 
            <TextInput
              style={styles.TextInput}
              placeholder="EnterPassword"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            /> 
          </View> 

          <TouchableOpacity>
            <Text style={styles.forgot_button} onPress={() => {
            props.navigation.navigate("Forget_password");}}
            >Forgot Password?</Text> 
            </TouchableOpacity> 

          <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Home");}}>
            <Text style={styles.loginText}>LOGIN</Text> 
            </TouchableOpacity> 
          
          <View>
            <TouchableOpacity>
            <Text style={styles.forgot_button} onPress={() => {
            props.navigation.navigate("Registration");}}
            >Create An Account</Text> 
          </TouchableOpacity>
           </View>


        </View> 
      );
    }

    


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#93CCED",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    create_account: {
        height: 30,
        marginBottom: 30,
      },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#4A60E9",
    },
  });

  export default Login;

  
  
