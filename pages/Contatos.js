import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';


export default class Contatos extends Component {
  static navigationOptions = {
    title: 'Contatos',
    headerStyle: {
      backgroundColor: '#ac58fa',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  navegaparaContatosCadastrados = () =>{
    this.props.navigation.navigate("Contatoscadastrados");
  }
  navegaparaEditarContatos = () =>{
    this.props.navigation.navigate("Editarcontato");
  }
  navegaparaCadastrarContatos = () =>{
    this.props.navigation.navigate("Cadastrarcontato");
  }
  navegaparaExcluirContato = () =>{
    this.props.navigation.navigate("Excluircontato");
  }

  render() {
    return (
    <View style={estilo.container}>
        <View style={estilo.content}>
            <View style={estilo.areaFunconalidades}>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaContatosCadastrados}>
                    <Text style={estilo.link}>Contatos cadastrados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaEditarContatos}>
                    <Text style={estilo.link}>Editar contatos</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaCadastrarContatos}>
                    <Text style={estilo.link}>Cadastrar contatos</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaExcluirContato}>
                    <Text style={estilo.link}>Excluir contatos</Text> 
                </TouchableOpacity>
            </View>
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
areaFunconalidades:{
    flex: 1,
    marginTop:10,
    backgroundColor: "#ffffff",
    flexDirection:"row",
    flexWrap:'wrap',
    alignContent: 'center', 
},
funcoes:{
    width:130,
    height:80,
    margin:10,
    backgroundColor:'#f4ddf8',
    borderRadius:15,
},
link:{
    padding: 10,
    marginTop: 10,
    color: "#ac58fa",
    fontSize: 18,
    fontWeight: "bold",
  },
botaoemergencia:{
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,
    backgroundColor:'#ef4374',
    borderRadius:150,
    shadowColor: "#000000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.46,
    elevation: 8,
},
textoemergencia:{
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },

});