import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Excluircontato extends Component {
  static navigationOptions = {
    title: 'Editar Contatos',
    headerStyle: {
      backgroundColor: '#AC58FA',
    },
    headerTintColor: '#fff',
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
        telefonenovo: '',
    }
}
cadastrarContato = async() =>{
  const meuid = await AsyncStorage.getItem('@mulher2')
  console.log(meuid);
  fetch(`${baseURL}/atualizacontatotelefone`,{
      method: 'PUT',
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ telefone: this.state.telefone, id_contatosusuario: meuid, telefonenovo: this.state.telefonenovo})
  }).then((responseData)=>{
      return responseData.json();
  }).then((jsonData)=>{
      console.log(jsonData);
      this.setState({naData: jsonData})
      console.log(this.state.naData)
      alert('Contato atualizado com sucesso');
      this.props.navigation.navigate("Cadastrarcontato");
  }).done();
      this.id_usuario = null;
      this.nome = null;
      this.login = null;
      this.senha = null;
}
  render() {
    const { telefone, telefonenovo } = this.state;
    return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.contato}>Edite o número do seu contato informando:</Text>
        <TextInput
                style={styles.input}
                placeholder="Telefone atual do contato"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {string=>this.setState({telefone : string}) }
                value = {telefone} 
            />
            <TextInput
                style={styles.input}
                placeholder="Novo telefone do contato"
                placeholderTextColor="#ccc"
                onChangeText= {(string)=>this.setState({telefonenovo : string})}
                value = {telefonenovo}
                autoCapitalize="none"
                autoCorrect={false}
               
            />
            <TouchableOpacity style={styles.button} onPress={this.cadastrarContato}>
                    <Text style={styles.buttonText}>Salvar alteração</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
header:{
    height:60,
    backgroundColor: '#f4ddf8',
    paddingHorizontal: 20,
    paddingTop:10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
},
headertext:{
    padding: 5,
    color: "#AC58FA",
    fontSize: 18,
    fontWeight: "bold",
},
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