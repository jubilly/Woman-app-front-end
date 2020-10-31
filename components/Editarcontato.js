import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Informes extends Component {
    static navigationOptions = {
        title: 'Editar Contato',
        headerStyle: {
          backgroundColor: '#ac58fa',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
   EditarContatoNome = () =>{
    this.props.navigation.navigate("EditarContatoNome");
  }
  EditarContatoTelefone = () =>{
    this.props.navigation.navigate("EditarContatoTelefone");
  }

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.areaFunconalidades}>
                <TouchableOpacity style={styles.funcoes} onPress={this.EditarContatoNome}>
                    <Text style={styles.link}>Editar nome </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.EditarContatoTelefone}>
                    <Text style={styles.link}>Editar telefone</Text> 
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
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
    fontSize: 17,
    fontWeight: "bold",
  },


});