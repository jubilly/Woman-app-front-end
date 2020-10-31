import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Novoretalo extends Component {
  static navigationOptions = {
    header: null
  };
  Relatos = () =>{
    this.props.navigation.navigate("Relatos");
  }
  constructor(props){
    super(props)
    this.state = {
      apiData:[],
      naData:[],
      nome: '',
      relato: '',
    }
  }
  cadastrarRelato = async() =>{
    const meuid = await AsyncStorage.getItem('@mulher2')
    fetch(`${baseURL}/cadastrorelatos` ,{
      method: 'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome: this.state.nome, relato: this.state.relato, id_relatosusuario: meuid})
    }).then((responseData)=>{
        return responseData.json();
    }).then((jsonData)=>{
        this.setState({naData: jsonData})
        alert('Relato cadastrado com sucesso');
        this.props.navigation.navigate("Relatos");
    }).done();
  }      
render() {
  const { nome, relato } = this.state;
    return (
    <View style={estilo.container}>
      <View style={estilo.cabecalho}>
            <TouchableOpacity onPress={this.Relatos}>
                <Text>Voltar</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style={estilo.botao} 
                onPress={this.cadastrarRelato}>
            <Text style={estilo.botaoTexto}>Relatar</Text>
            </TouchableOpacity>
      </View>
      <TextInput
            style={estilo.entradanome}
            multiline
            placeholder= "Nome (Você não precisa se identificar)"
            placeholderTextColor = "#cccccc"
            onChangeText= {txt=> this.setState({ nome: txt })}
            value = {nome}
        />
        <TextInput
            style={estilo.input} 
            placeholder= "O que aconteceu?"
            placeholderTextColor = "#cccccc"
            onChangeText= {txt=>this.setState({relato : txt})}
            value = {relato} 
        />
    </View>
    );
  }
}
const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
    cabecalho: {
      paddingTop: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
  
    botao: {
      height: 32,
      paddingHorizontal: 20,
      borderRadius: 16,
      backgroundColor: "#ac58fa",
      justifyContent: "center",
      alignItems: "center"
    },
  
    botaoTexto: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold"
    },
    entradanome: {
      margin: 20,
      fontSize: 16,
      height:50,
      color: "#000000",
      borderWidth:1,
      borderColor: "#cccccc",
    
    },
    input: {
      margin: 20,
      fontSize: 16,
      height:100,
      color: "#000000",
      borderWidth:1,
      borderColor: "#cccccc",
    
    }
  });
  