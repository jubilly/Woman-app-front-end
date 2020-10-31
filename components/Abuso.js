import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

// import { Container } from './styles';
  
export default class Abuso extends Component {
  static navigationOptions = {
    title: 'Abusos',
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
              <Text style={estilo.textotitulo}>Humilhar, xingar e diminuir a autoestima: </Text>
              Agressões como humilhação, desvalorização moral ou deboche público em relação a mulher constam como tipos de violência emocional.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Tirar a liberdade de crença: </Text>
              Um homem não pode restringir a ação, a decisão ou a crença de uma mulher. Isso também é considerado como uma forma de violência psicológica.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Fazer a mulher achar que está ficando louca: </Text>
              Há inclusive um nome para isso: o gaslighting. Uma forma de abuso mental que consiste em distorcer os fatos e omitir situações para deixar a vítima em dúvida sobre a sua memória e sanidade.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Controlar e oprimir a mulher: </Text>
              Aqui o que conta é o comportamento obsessivo do homem sobre a mulher, como querer controlar o que ela faz, não deixá-la sair, isolar sua família e amigos ou procurar mensagens no celular ou e-mail.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Expor a vida íntima:  </Text>
              Falar sobre a vida do casal para outros é considerado uma forma de violência moral, como por exemplo vazar fotos íntimas nas redes sociais como forma de vingança.
             </Text>
             <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Atirar objetos, sacudir e apertar os braços:  </Text>
              Nem toda violência física é o espancamento. São considerados também como abuso físico a tentativa de arremessar objetos, com a intenção de machucar, sacudir e segurar com força uma mulher.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}>Forçar atos sexuais desconfortáveis:  </Text>
              Não é só forçar o sexo que consta como violência sexual. Obrigar a mulher a fazer atos sexuais que causam desconforto ou repulsa, como a realização de fetiches, também é violência.
              </Text>
              <Text style={estilo.texto}>
              <Text style={estilo.textotitulo}> Impedir a mulher de prevenir a gravidez ou obrigá-la a abortar: </Text>
              O ato de impedir uma mulher de usar métodos contraceptivos, como a pílula do dia seguinte ou o anticoncepcional, é considerado uma prática da violência sexual. Da mesma forma, obrigar uma mulher a abortar também é outra forma de abuso.
              </Text>
             <Text style={estilo.textotitulo}>Fonte: Brito (2017)  </Text>
              
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