import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../utils/api'

export default class Excluircontato extends Component {
  static navigationOptions = {
    title: 'Contatos Cadastrados',
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
        login: '', 
        telefone:'',
    }
}
  async componentDidMount(){
    const meuid = await AsyncStorage.getItem('@mulher2')
    fetch(`${baseURL}/contatos/${(meuid)}` ,{
      method: 'GET'
    }).then((responseData)=>{
        return responseData.json();
    }).then((jsonData)=>{
        this.setState({apiData: jsonData})
    }).done();
  }
  render() {
    const data = this.state.apiData;
    let dataDisplay = data.map(function(jsonData){
    return(
      <View key={jsonData.id_usuario}>
        <View style={styles.area}>
          <Text style={styles.cortexto}>
            {jsonData.nome} - {jsonData.telefone} 
          </Text>  
        </View>
      </View>
    )   
    });
    return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.content}>
        {dataDisplay}
        </View>
    </View> 
    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
header:{
    height:60,
    backgroundColor: '#f4ddf8',
    paddingHorizontal: 20,
    paddingTop:10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',   
},
area:{
  width:300,
  alignItems: "center",
  borderBottomWidth:1,
  backgroundColor: "#AC58FA",
  margin: 4,
  padding: 20,
},
cortexto:{
    padding: 5,
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "bold",
    marginRight:10,
    fontWeight: 'bold',
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