import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Novolocal extends Component {
  static navigationOptions = {
    header: null
  };
  Locais = () =>{
    this.props.navigation.navigate("Locais");
  }
  constructor(props){
    super(props)
    this.state = {
      apiData:[],
      naData:[],
      nome: '',
      local: '',
    }
  }
  cadastrarLocal = async() =>{
    const meuid = await AsyncStorage.getItem('@mulher2')
    fetch(`${baseURL}/cadastrolocais` ,{
      method: 'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome: this.state.nome, local: this.state.local, id_localusuario: meuid})
    }).then((responseData)=>{
        return responseData.json();
    }).then((jsonData)=>{
        this.setState({naData: jsonData})
        alert('Local cadastrado com sucesso');
        this.props.navigation.navigate("Locais");
    }).done();
  }      
render() {
  const { nome, local } = this.state;
    return (
    <View style={estilo.container}>
      <View style={estilo.cabecalho}>
            <TouchableOpacity onPress={this.Locais}>
                <Text>Voltar</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style={estilo.botao} 
                onPress={this.cadastrarLocal}>
            <Text style={estilo.botaoTexto}>Relatar local</Text>
            </TouchableOpacity>
      </View>
      <TextInput
            style={estilo.inputnome}
            multiline
            placeholder= "Nome (Você não precisa se identificar)"
            placeholderTextColor = "#cccccc"
            onChangeText= {(txt)=> this.setState({ nome: txt })}
            value = {nome} 
        />
        <TextInput
            style={estilo.input}
            multiline
            placeholder= "Onde e o que aconteceu?"
            placeholderTextColor = "#cccccc"
            onChangeText= {(txt)=>this.setState({local : txt})}
            value = {local} 
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
    texto:{
        padding: 5,
        color: "#090909",
        fontSize: 15,
    },
    area:{
        alignItems: "center",
        borderBottomWidth:1,
        borderColor:"#ccc",
        backgroundColor: "#fff",
        flexGrow: 1,
        padding: 15,
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
    inputnome: {
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
  