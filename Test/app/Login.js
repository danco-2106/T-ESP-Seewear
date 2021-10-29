
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {


  constructor(props){
    super(props)
    state={
      email : "",
      password : ""
    }
  }

  connected() {
    console.log("email: " + this.state.email);
    console.log("pwd: " + this.state.password);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Seewear</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#4d4d4d"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Mot de passe..." 
            placeholderTextColor="#4d4d4d"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Mot de passe oublié?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.connected}>
          <Text style={styles.loginText}>CONNEXION</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Créer un compte</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#4d4d4d"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});