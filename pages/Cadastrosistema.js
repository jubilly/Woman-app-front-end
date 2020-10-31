import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Logo} from './styles';
import baseURL from '../src/utils/api'

export default class Cadastrosistema extends Component {
  static navigationOptions = {
    header: null 
}
  constructor(props){
    super(props)
    this.state = {
        apiData:[],
        naData:[],
        nome: '',
        login: '',
        senha: '',
    }   
}
  cadastrar = () =>{
    fetch(`${baseURL}/cadastroaosistema`,{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome: this.state.nome, login: this.state.login, senha: this.state.senha })
    }).then((responseData)=>{
        return responseData.json();
    }).then((jsonData)=>{
        this.setState({naData: jsonData})
        Alert.alert('Cadastrado com sucesso');
        this.props.navigation.navigate("Login");
    }).done();
  }
  
  handleLogin = () =>{
    this.props.navigation.navigate("Login");
  }
  render() {
    const { nome, login, senha } = this.state;
    return (
      <View style={estilo.container}>
        <View style={estilo.content}>
        <Logo source={require('./testeicon.png')} resizeMode="contain"/>
        <Text style={estilo.descricao}>Por que toda mulher tem direito à vida,
         à liberdade e à segurança pessoal </Text>  
            <TextInput
                style={estilo.entrada}
                placeholderTextColor="#ccc"
                placeholder="Nome completo"
                onChangeText= {(string)=>this.setState({nome : string})}
                value = {nome}
            />
             <TextInput
                style={estilo.entrada}
                placeholderTextColor="#ccc"
                placeholder="Nome do usuário"
                onChangeText= {(string)=>this.setState({login : string})}
                value = {login} 
            />
             <TextInput
                style={estilo.entrada}
                secureTextEntry 
                placeholderTextColor="#ccc"
                placeholder="Senha"
                onChangeText= {(string)=>this.setState({senha : string})}
                value = {senha} 
            />
            <TouchableOpacity style={estilo.botao} onPress={this.cadastrar}>
                    <Text style={estilo.botaotexto}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={estilo.link} onPress={this.handleLogin}>
                Voltar ao login
            </Text>
          </View>
        </View>
    );
  }
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  link:{
    padding: 10,
    marginTop: 10,
    color: "#AC58FA",
    fontSize: 16,
    fontWeight: "bold",

  },
  descricao:{
    color: "#AC58FA",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  entrada: {
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  botao: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 20,
    backgroundColor: "#AC58FA",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  botaotexto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});