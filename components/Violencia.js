import React, { Component } from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';

// import { Container } from './styles';

export default class Violencia extends Component {
  static navigationOptions = {
    title: 'Violência',
    headerStyle: {
      backgroundColor: '#ac58fa',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <ScrollView>
        <View style={estilo.content }>
          <View style={estilo.container}>
              <Text style={estilo.texto}>
              A Convenção de Belém do Pará, define violência contra a mulher como “qualquer ato ou conduta baseada no gênero, que cause morte, dano ou sofrimento físico, sexual ou psicológico à mulher, tanto na esfera pública como na esfera privada” (Capítulo I, Artigo 1º).
              <Text style={estilo.textotitulo}> Fonte: Senado Nacional</Text>
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Violência física (visual): </Text>
               É aquela entendida como qualquer conduta que ofenda integridade ou saúde corporal da mulher. É praticada com uso de força física do agressor, que machuca a vítima de várias maneiras ou ainda com o uso de armas, exemplos: Bater, chutar, queimar. cortar e mutilar.. 
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Violência psicológica (não-visual, mas muito extensa): </Text>
              Qualquer conduta que cause dano emocional e diminuição da autoestima da mulher, nesse tipo de violência é muito comum a mulher ser proibida de trabalhar, estudar, sair de casa, ou viajar, falar com amigos ou parentes.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Violência sexual (visual): </Text>
              A violência sexual está baseada fundamentalmente na desigualdade entre homens e mulheres. Logo, é caracterizada como qualquer conduta que constranja a mulher a presenciar, a manter ou a participar de relação sexual não desejada; quando a mulher é obrigada a se prostituir, a fazer aborto, a usar anticoncepcionais contra a sua vontade ou quando a mesma sofre assédio sexual, mediante intimidação, ameaça, coação ou uso da força; que a induza a comercializar ou a utilizar, de qualquer modo, a sua sexualidade.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Violência patrimonial (visual-material): </Text>
              importa em qualquer conduta que configure retenção, subtração, destruição parcial ou total de objetos pertencentes à mulher, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Violência moral (não-visual):  </Text>
              Entende-se por violência moral qualquer conduta que importe em calúnia, quando o agressor ou agressora afirma falsamente que aquela praticou crime que ela não cometeu; difamação; quando o agressor atribui à mulher fatos que maculem a sua reputação, ou injúria, ofende a dignidade da mulher. (Exemplos: Dar opinião contra a reputação moral, críticas mentirosas e xingamentos). Obs: Esse tipo de violência pode ocorrer também pela internet. 
              
             </Text>
             <Text style={estilo.textotitulo}>Fonte: Coordenadoria da Mulher  </Text>
              
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