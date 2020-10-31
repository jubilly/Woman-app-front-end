import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Communications from 'react-native-communications';
import SendSMS from 'react-native-sms'
import baseURL from '../utils/api'

export default class Telainicial extends Component {
  static navigationOptions = {
        header: null,
  };
  constructor(props){
    super(props)
    this.state = {
        apiData:[],
        contatos: [],
        naData:[],
    }
}
async componentDidMount(){
  const meuid = await AsyncStorage.getItem('@mulher2')
  fetch(`${baseURL}/contatos/${meuid}` ,{
      method: 'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
  },
  }).then((responseData) => {
      return responseData.json();
  }).then((jsonData) => {
      let array = []
      jsonData.map(contatos => {
        array.push(contatos.telefone.toString())
        this.setState({contatos: array})
      })
  }).catch((e)=>{
    console.log(e + "erro");
  })
}
mensagem = () => {
    SendSMS.send({
      body: 'Estou em perigo!',
      recipients:this.state.contatos,
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true
  });
}
  navegaparaRelatos = () =>{
    this.props.navigation.navigate("Relatos");
  }
  navegaparaInformes = () =>{
    this.props.navigation.navigate("Informes");
  }
  navegaparaLocais = ()=>{
    this.props.navigation.navigate("Locais");
  }
  navegaparaContatos = ()=>{
    this.props.navigation.navigate("Contatos");
  }
  navegaparaLeis = () =>{
    this.props.navigation.navigate("Leis");
  }
  navegaparaEdepois = () =>{
    this.props.navigation.navigate("Edepois");
  }

  render() {
    return (
    <View style={estilo.container}>
        <View style={estilo.cabecalho}>
            <Text style={estilo.cabecalhotexto}>Bem-vinda</Text>
        </View>
        <View style={estilo.content}>
            <TouchableOpacity
            onPress={() => Communications.phonecall('180', true)} 
            style={estilo.botaoemergencia}
           >  
            <View>
              <Text style={estilo.textoemergencia}>EMERGÊNCIA - 180 </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.mensagem}
            style={estilo.botaoemergencia}
           >  
            <View>
              <Text style={estilo.textoemergencia}>SMS PARA CONTATOS </Text>
            </View>
            </TouchableOpacity>
            <View style={estilo.areaFunconalidades}>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaRelatos}>
                    <Text style={estilo.link}>Relatos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaInformes}>
                    <Text style={estilo.link}>Informes</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaLocais}>
                    <Text style={estilo.link}>Locais</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaContatos}>
                    <Text style={estilo.link}>Contatos</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaLeis}>
                    <Text style={estilo.link}>Leis</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={estilo.funcoes} onPress={this.navegaparaEdepois}>
                    <Text style={estilo.link}>E depois?</Text> 
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}
const estilo = StyleSheet.create({
cabecalho:{
    height:60,
    backgroundColor: '#AC58FA',
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
    backgroundColor:'#fa5858',
    borderRadius:15,
    width:300,  
    marginBottom:10,
},
textoemergencia:{
    margin:5,
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "bold",
    alignItems:'center',  
  },
});