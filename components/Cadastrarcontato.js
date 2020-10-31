import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Excluircontato extends Component {
  static navigationOptions = {
    title: 'Cadastrar Contatos',
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
        telefone: ''
    }
}
cadastrarContato = async() =>{
  const meuid = await AsyncStorage.getItem('@mulher2')
  fetch(`${baseURL}/cadastrocontatos`,{
      method: 'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome: this.state.nome, telefone: this.state.telefone, id_contatosusuario: meuid})
  }).then((responseData)=>{
      return responseData.json();
  }).then((jsonData)=>{
      this.setState({naData: jsonData})
      alert('Contato cadastrado com sucesso');
      this.props.navigation.navigate("Cadastrarcontato");
  }).done();
}
  render() {
    return (
      <ScrollView>
        <View style={estilo.container}>
          <View style={estilo.content}>
            <Text style={estilo.descricao}>Cadastre os seus contatos de segurança. São permitidos até 5 contatos.</Text>
            <Text style={estilo.contato}>Contato 1:</Text>
            <TextInput
                style={estilo.entrada}
                placeholder="Nome do contato"
                placeholderTextColor="#cccccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {(string)=>{this.nome = string}}
                value = {this.nome} 
            />
            <TextInput
                style={estilo.entrada}
                placeholder="Número de telefone"
                placeholderTextColor="#cccccc"
                onChangeText= {(string)=>{this.telefone = string}}
                value = {this.telefone}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity style={estilo.botao} onPress={this.cadastrarContato}>
                    <Text style={estilo.botaotexto}>Cadastrar Contato</Text>
            </TouchableOpacity>
            <Text style={estilo.contato}>Contato 2:</Text>
            <TextInput
                style={estilo.entrada}
                placeholder="Nome do contato"
                placeholderTextColor="#cccccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {(string)=>{this.nome = string}}
                value = {this.nome} 
            />
            <TextInput
                style={estilo.entrada}
                placeholder="Número de telefone"
                placeholderTextColor="#cccccc"
                onChangeText= {(string)=>{this.telefone = string}}
                value = {this.telefone}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity style={estilo.botao} onPress={this.cadastrarContato}>
                    <Text style={estilo.botaotexto}>Cadastrar Contato</Text>
            </TouchableOpacity>
            <Text style={estilo.contato}>Contato 3:</Text>
            <TextInput
                style={estilo.entrada}
                placeholder="Nome do contato"
                placeholderTextColor="#cccccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {(string)=>{this.nome = string}}
                value = {this.nome} 
            />
            <TextInput
                style={estilo.entrada}
                placeholder="Número de telefone"
                placeholderTextColor="#cccccc"
                onChangeText= {(string)=>{this.telefone = string}}
                value = {this.telefone}
                autoCapitalize="none"
                autoCorrect={false}    
            />
            <TouchableOpacity style={estilo.botao} onPress={this.cadastrarContato}>
                    <Text style={estilo.botaotexto}>Cadastrar Contato</Text>
            </TouchableOpacity>
            <Text style={estilo.contato}>Contato 4:</Text>
            <TextInput
                style={estilo.entrada}
                placeholder="Nome do contato"
                placeholderTextColor="#cccccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {(string)=>{this.nome = string}}
                value = {this.nome} 
            />
            <TextInput
                style={estilo.entrada}
                placeholder="Número de telefone"
                placeholderTextColor="#cccccc"
                onChangeText= {(string)=>{this.telefone = string}}
                value = {this.telefone}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity style={estilo.botao} onPress={this.cadastrarContato}>
                    <Text style={estilo.botaotexto}>Cadastrar Contato</Text>
            </TouchableOpacity>
            <Text style={estilo.contato}>Contato 5:</Text>
            <TextInput
                style={estilo.entrada}
                placeholder="Nome do contato"
                placeholderTextColor="#cccccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {(string)=>{this.nome = string}}
                value = {this.nome} 
            />
            <TextInput
                style={estilo.entrada}
                placeholder="Número de telefone"
                placeholderTextColor="#cccccc"
                onChangeText= {(string)=>{this.telefone = string}}
                value = {this.telefone}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity style={estilo.botao} onPress={this.cadastrarContato}>
                    <Text style={estilo.botaotexto}>Cadastrar Contato</Text>
            </TouchableOpacity>           
          </View>
        </View>
      </ScrollView>
    );
  }
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  descricao:{
    color: "#ac58fa",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  contato:{
    marginTop:20,
    color: "#ac58fa",
    fontSize: 16,
    fontWeight: "bold",  
  },
  botao: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 20,
    backgroundColor: "#ac58fa",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  botaotexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  }
});