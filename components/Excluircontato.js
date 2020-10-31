import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Excluircontato extends Component {
  static navigationOptions = {
    title: 'Excluir Contato',
    headerStyle: {
      backgroundColor: '#ac58fa',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props)
    this.state = {
        apiData:[],
        naData:[],
        telefone: '',
    }
    this.id_usuario = null;
    this.telefone = null;
 
}
// excluir = async() =>{
//   const meuid = await AsyncStorage.getItem('@mulher2')
//   const tel = this.telefone;
//   fetch(`${baseURL}/excluircontato/${meuid}/${tel}`,{
//       method: 'DELETE',
//       headers:{
//           'Accept':'application/json',
//           'Content-Type': 'application/json'
//       },
     
//   }).then((responseData)=>{
//       return responseData.json();
//   }).then((jsonData)=>{
//       console.log(jsonData);
//       this.setState({naData: jsonData})
//       console.log(this.state.naData)
//       alert('Contato excluído com sucesso');
//       this.props.navigation.navigate("Contatos");
//   }).done();
// }
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder="Número de telefone"
                placeholderTextColor="#ccc"
                onChangeText= {(string)=>{this.telefone = string}}
                value = {this.telefone}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.button} onPress={this.excluir}>
                    <Text style={styles.buttonText}>Excluir Contato</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: "#ffffff" ,
},

content: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   padding: 30
},
input: {
  color:"#000",
  borderWidth: 1,
  borderColor: "#DDD",
  borderRadius: 5,
  height: 44,
  backgroundColor:'#fff',
  paddingHorizontal: 15,
  alignSelf: "stretch",
  marginTop: 10,
},
button: {
  height: 44,
  alignSelf: "stretch",
  marginTop: 20,
  backgroundColor: "#AC58FA",
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center"
},

buttonText: {
  color: "#FFF",
  fontSize: 16,
  fontWeight: "bold"
}

});