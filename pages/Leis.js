import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export default class Telainicial extends Component {
  static navigationOptions = {
    title: 'Leis',
    headerStyle: {
      backgroundColor: '#AC58FA',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    username:''
  };

  render() {
    return (
      <ScrollView>
        <View style={estilo.content }>
          <View style={estilo.container}>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Lei Maria da Penha (11.340/06): </Text>
              é a principal legislação do Brasil de proteção às mulheres vítimas de violência doméstica.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Lei da Importunação Sexual (13.718/2018): </Text>
              entrou em vigor e define como crime a realização de ato libidinoso na presença de alguém e
               sem seu consentimento, como toques inapropriados ou beijos “roubados”, por exemplo.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Cota Eleitoral de Gênero (9.504/97): </Text>
              que estabelece a obrigatoriedade de partidos preencherem o mínimo de 30% de candidatas
               do gênero feminino.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Lei do feminicídio: </Text>
              A lei do feminicídio foi criada devido a necessidade de providências mais rigorosas
               refletida nos altos índices de violência contra as mulheres no Brasil.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>A mulher tem direito ao repouso após o aborto natural: </Text>
              Falar sobre a vida do casal para outros é considerado uma forma de violência moral,
               como por exemplo vazar fotos íntimas nas redes sociais como forma de vingança.
             </Text>
             <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Projeto de Lei nº 172/2014: </Text>
              permite que mulheres desçam fora do ponto de ônibus no período que vai das 22h às 5h do dia
              seguinte para sua segurança, principalmente em áreas de grande periculosidade.
              </Text>
             <Text style={estilo.textotitulo}>Fonte: Jusbrasil  </Text>
             <Text style={estilo.textotitulo}>Fonte: Exame Brasil  </Text> 
          </View>
        </View>
      </ScrollView>
        
    );
  }
}
const estilo = StyleSheet.create({

  container: {
      flex: 1,
      fontSize: 24,
  },
  texto:{
    marginBottom:5,
    fontSize:16,
    color:"#000000",
    textAlign: 'justify',
  },
  textotitulo:{
    marginBottom:5,
    fontSize:16,
    color:"#000000",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
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
  
  });