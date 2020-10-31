import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Excluircontato extends Component {
  static navigationOptions = {
    title: 'Editar Contatos',
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
        nome: '',
        novonome: '',
    }
}
cadastrarContato = async() =>{
  const meuid = await AsyncStorage.getItem('@mulher2')
  fetch(`${baseURL}/atualizacontatonome`,{
      method: 'PUT',
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome: this.state.nome, id_contatosusuario: meuid})
  }).then((responseData)=>{
      return responseData.json();
  }).then((jsonData)=>{
      console.log(jsonData);
      this.setState({naData: jsonData})
      console.log(this.state.naData)
      alert('Nome do contato atualizado com sucesso');
      this.props.navigation.navigate("Cadastrarcontato");
  }).done();
}
  render() {
    const { id_usuario, nome, novonome } = this.state;
    return (
    <View style={estilo.container}>
        <View style={estilo.content}>
        <Text style={estilo.contato}>Edite o nome do seu contato informando:</Text>
        <TextInput
                style={estilo.entrada}
                placeholder="Nome do atual contato"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {string=>this.setState({nome : string})}
                value = {nome} 
            />
            <TextInput
                style={estilo.entrada}
                placeholder="Novo nome do contato"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {(string)=>this.setState({novonome : string})}
                value = {novonome} 
            />
            <TouchableOpacity style={estilo.button} onPress={this.cadastrarContato}>
                    <Text style={estilo.buttonText}>Salvar alteração</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}
const estilo = StyleSheet.create({
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
    color: "#ac58fa",
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
entrada: {
  color:"#000000",
  borderWidth: 1,
  borderColor: "#dddddd",
  borderRadius: 5,
  height: 44,
  backgroundColor:'#ffffff',
  paddingHorizontal: 15,
  alignSelf: "stretch",
  marginTop: 10,
},
button: {
  height: 44,
  alignSelf: "stretch",
  marginTop: 20,
  backgroundColor: "#ac58fa",
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center"
},

buttonText: {
  color: "#ffffff",
  fontSize: 16,
  fontWeight: "bold"
}

});