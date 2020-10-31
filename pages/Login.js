import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Logo} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Login extends Component {
  static navigationOptions = {
      header: null
  }
  constructor(props){
    super(props)
    this.state = {
        apiData:[],
        naData:[],
        id_usuario: '',
        login: '',
        senha: ''
    }
}
 Login = () =>{
  fetch(`${baseURL}/auth`,{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_usuario:this.state.id_usuario,
       login: this.state.login,
        senha: this.state.senha })
  }).then((response)=>{
      return response.json();
  }).then((json)=>{
      this.setState({apiData: json})
      var porid = JSON.stringify(this.state.apiData[0].id_usuario);
      this.props.navigation.navigate("Telainicial");
      AsyncStorage.setItem('@mulher2',porid);
  }).done();
    this.setState({ login: "", senha: "" })
} 

  CadastroSistema = () =>{
    this.props.navigation.navigate("Cadastrosistema");
  }
  render() {
    const { id_usuario, login, senha } = this.state;
    return (
      <View style={estilo.container}>
        <View style={estilo.content}>
            <Logo source={require('./testeicon.png')} resizeMode="contain"/>
            <Text style={estilo.descricao}>Por que toda mulher tem direito à
             vida, à liberdade e à segurança pessoal 
            </Text>
            <TextInput
                style={estilo.entrada}
                placeholder="Nome do usuário"
                placeholderTextColor="#cccccc"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText= {txt => this.setState({ login: txt })}
                value = {login} 
            />
            <TextInput
                style={estilo.entrada}
                placeholder="Senha"
                placeholderTextColor="#cccccc"
                onChangeText= {txt => this.setState({ senha: txt })}
                value = {senha}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            <TouchableOpacity style={estilo.botao} onPress={this.Login}>
                    <Text style={estilo.botaotexto}>Entrar</Text>
            </TouchableOpacity>
            <Text style={estilo.link} onPress={this.CadastroSistema}>
                Deseja se cadastrar?
            </Text>
        </View>      
      </View>
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
    color: "#000000",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 5,
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },
  descricao:{
    color: "#ac58fa",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  link:{
    padding: 10,
    marginTop: 10,
    color: "#ac58fa",
    fontSize: 16,
    fontWeight: "bold",

  },
  botao:{
    height: 44,
    alignSelf: "stretch",
    marginTop: 20,
    backgroundColor: "#ac58fa",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  botaotexto:{
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  }
});