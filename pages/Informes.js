import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default class Informes extends Component {
    static navigationOptions = {
        title: 'Informes',
        headerStyle: {
          backgroundColor: '#ac58fa',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
   Violencia = () =>{
    this.props.navigation.navigate("Violencia");
  }
  Abuso = () =>{
    this.props.navigation.navigate("Abuso");
  }
  render() {
    return (
    <View style={estilo.container}>
        <View style={estilo.content}>
            <View style={estilo.areaFunconalidades}>
                <TouchableOpacity style={estilo.funcoes} onPress={this.Violencia}>
                    <Text style={estilo.link}>Violência</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.Abuso}>
                    <Text style={estilo.link}>Abusos</Text> 
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}
const estilo = StyleSheet.create({

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
  areaFunconalidades:{
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection:"row",
    flexWrap:'wrap',
    alignContent: 'center', 
},
funcoes:{
    alignItems:'center',
    width:130,
    height:80,
    margin:10,
    backgroundColor:'#f4ddf8',
    borderRadius:15,
},

});