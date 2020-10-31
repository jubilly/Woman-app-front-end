import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'
export default class Mapa extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props)
    this.state = {
        apiData:[],
        naData:[],
      }
  }
  async componentDidMount(){
    const meuid = await AsyncStorage.getItem('@mulher2')
    fetch(`${baseURL}/locais`,{
        method: 'GET'
    }).then((responseData)=>{
        return responseData.json();
    }).then((jsonData)=>{
        this.setState({apiData: jsonData})
    }).done();
        this.username = null;
    }
    voltar = ()=>{
      this.props.navigation.navigate("Telainicial");
    }
    novolocal = ()=>{
      this.props.navigation.navigate("NovoLocal");
    }
  render(){
    const data = this.state.apiData;
    let dataDisplay = data.map(function(jsonData){
        return(
            <View key={jsonData.id_usuario}>
                <View>
                  <Text style={estilo.autor}>
                  {jsonData.nome} local:
                  </Text>
                </View>
                <View style={estilo.area}>
                    <Text style={estilo.texto}>
                      {jsonData.local} 
                    </Text>
                </View>
            </View>
        )   
    });
    return(
      <ScrollView>
        <View style={estilo.container}>
          <View style={estilo.cabecalho}>
              <TouchableOpacity onPress={ this.voltar}>
                <Text style={estilo.cabecalhotexto}>Voltar</Text>
              </TouchableOpacity>
              <Text style={estilo.cabecalhotexto} onPress={this.novolocal}> Novo local</Text>
          </View>
              <View style={estilo.content}>
              <ScrollView>{dataDisplay}</ScrollView>
              </View> 
        </View> 
      </ScrollView>
    );
  }
}
const estilo = StyleSheet.create({
area:{
      alignItems: "center",
      borderBottomWidth:1,
      borderColor:"#ccc",
      backgroundColor: "#fff",
      flexGrow: 1,
      padding: 15,
      marginBottom:10,
},
cabecalho:{
      height:60,
      backgroundColor: '#ac52fa',
      paddingHorizontal: 20,
      paddingTop:10,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
},
cabecalhotexto:{
      padding: 5,
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
  },
autor:{
      fontSize:16,
      marginTop:10,
      color:"#ac52fa",
      fontWeight: "bold",

  },
texto:{
      padding: 5,
      color: "#090909",
      fontSize: 16,
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
});