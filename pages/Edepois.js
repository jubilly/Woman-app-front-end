import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export default class Edepois extends Component {
  static navigationOptions = {
    title: 'Pós violência',
    headerStyle: {
      backgroundColor: '#ac58fa',
    },
    headerTintColor: '#ffffff',
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
              <Text style={estilo.textotitulo}>É importante que: </Text>
              A vítima denuncie o agressor na Central de Antedimento à mulher, que pode ser contatada através do número 180.
              Uma vez acionada, a Central de Antedimento à mulher providenciará o procedimento mais adequado para o caso.
              É importante que as autoridades sejam acionadas acerca do caso.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Efetue os boletins de ocorrência: </Text>
              Com os boletins de ocorrência, é feita um relato oficial da situação que ocorreu. É importante que nenhum detalhe
              seja omitido, uma vez que pode prejudicar no andamento da devida providência. Exemplo: Em casos de estupro, a vítima
              deve relatar o ocorrido para que seja possível a delegacia encaminhá-la para o hospital onde será feito o tratamento
              médico.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Procure ajuda psicológica: </Text>
              Sofrer violência, abuso ou qualquer outra injustiça por ser mulher não é comum ou culpa da vítima. Com a ajuda psicológica,
              pode ser possível que a vítima seja auxiliada a lidar com o trauma sofrido, e assim, consiga superar o acontecido.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Grupos de mulheres: </Text>
              Infelizmente o número de mulheres vítimas de violência no Brasil é alarmante, 536 mulheres são agredidas por hora. O que as vítimas
              podem fazer é se unirem através de grupos que realizam encontros descontraídos, que proporcionarao momentos alegres aos membros.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Fale a respeito: </Text>
              Lembre-se: a culpa nunca é da vítima. A maioria das mulheres preferem omitir por medo que aconteça novamente, por terem vergonha
              ou receio. Falar sobre o assunto com outras mulheres e homens é importante para que a consciência que a violência realizada em 
              decorrência ao gênero não é normal. Através da fala, mulheres que não sofreram esse tipo de violência ou abuso são alertadas sobre
              o assunto. Jovens e adolescentes em formação sao conscientizados de que receber e praticar violência de gênero não é uma atitude 
              digna com o próximo.
              </Text>
             <Text style={estilo.textotitulo}>Fonte: Caetano, 2019  </Text>
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
