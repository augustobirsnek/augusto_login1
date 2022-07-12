import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./image/logo.jpg')} resizeMode='cover' style={styles.logo}/>
      </View> 
      <View style={styles.content}>
        <Text style={styles.text}>
          Selecione seu perfil abaixo para acessar sua conta:
        </Text>
        <Text style={styles.botao1}>
          Responsável
        </Text>
        <Text style={styles.botao2}>
          Profissional
        </Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    width: "100%",
    height: 250
  },
  logo: {
    width: "100%",
    height: "100%"
  },
  content: {
    padding: 40,
    width: "100%"
  },
  text: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600'
  },
  botao1: {
    fontSize: 18,
    marginTop: 35,
    height:50,
    width: "100%",
    backgroundColor: "#07689F",
    color: "#FFF",
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700'
  },
  botao2: {
    fontSize: 18,
    marginTop: 25,
    height:50,
    width: "100%",
    borderColor: "#07689F",
    borderWidth: 3,
    color: "#07689F",
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700'
  }
});

export default App;
