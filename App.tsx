import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, StatusBar, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Api from './src/services/api';


 export default function App () {

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [avatar, setAvatar] = useState("");

  async function buscarUsuario() {
     if(nomeUsuario == "") {
       Alert.alert("Usuario invalido");
      setNomeUsuario("");
     }

    try{
      const response = await Api.get(`/${nomeUsuario}`);
      setNome(response.data.name);
      setLogin(response.data.login);
      setLocalizacao(response.data.location);
      setAvatar(response.data.avatar_url);
    }
    catch(error) {
      console.log("erro" + error);
    }
  }

  return(
    
  <View style={styles.containerPrincipal}>
    <StatusBar
      barStyle={"dark-content"}
      hidden = {false}
      backgroundColor= "#AEDEFC"
      translucent = {false}
      networkActivityIndicatorVisible = {true}
    />
    <LinearGradient
        // Background Linear Gradient
        colors={["#AEDEFC", "#FFDFDF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      > 
    <LinearGradient
        // Background Linear Gradient
        colors={["#F875AA", "#AEDEFC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      > 
      <Text style={styles.title}>HUBusca</Text>
      </LinearGradient>
    
    
    <View style={styles.containerBuscar}>
          <TextInput style={styles.inputBuscar} 
          value={nomeUsuario} 
          onChangeText={(texto) => setNomeUsuario(texto)}
          placeholder="Pesquisar"
          />
          <TouchableOpacity style={styles.botaoBuscar} onPress={buscarUsuario}>
            <Text style={styles.botaoBuscarTexto}> Buscar </Text>
          </TouchableOpacity>
     </View>

     <View style={styles.containerUsuario}>
          <Image
            style={styles.tinyLogo}
              source={{uri: avatar}}
            />
          <TextInput style={styles.caixaTexto} 
            placeholder="Nome"
            value={nome}
            onChangeText={(texto) => setNome(texto)} 
          />
          <TextInput style={styles.caixaTexto}
            placeholder="Login" 
            value={login}
            onChangeText={(texto) => setLogin(texto)}
          />
          <TextInput 
            style={styles.caixaTexto} 
            value={localizacao} 
            onChangeText={(texto) => setLocalizacao(texto)} 
            placeholder="Localização"
          />
    </View>

        
      
  </LinearGradient>
  </View>
  
  
 )}

const styles=StyleSheet.create({
    containerPrincipal: {
      flex: 1,
      flexDirection: "row",
    },
    title: {
      color: "#ffffff",
      fontSize: 25,
      fontWeight: "bold",
      alignSelf: "center",
      margin: 20,
    },
    containerBuscar: {
      flexDirection: "row",
      height: 90,
      marginHorizontal: 10,
    },
    containerUsuario: {
      borderColor: "#F875AA",
      flexDirection: "column",
      borderWidth: 2,
      fontSize: 18,
      marginTop: 10,
      borderRadius: 10,
      padding: 20,
      marginHorizontal: 10,
      alignItems: "center",
    },
    inputBuscar: {
      borderColor: "#F875AA",
      color: "#F875AA",
      borderWidth: 2,
      width: '67%',
      fontSize: 18,
      marginTop: 10,
      marginEnd: 10,
      borderRadius: 10,
      padding: 15,
    },
    botaoBuscar: {
      backgroundColor: "#F875AA",
      width: 100,
      height: 80,
      marginTop: 10,
      marginEnd: 0,
      borderRadius: 10,
      padding: 15,
      alignItems: "center"
    },
    botaoBuscarTexto: {
      color: "#ffffff",
      fontSize: 22,
      textAlign: "center",
      marginTop: -20
    },
    caixaTexto: {
      borderColor: "#F875AA",
      color:"#F875AA",
      borderWidth: 2,
      width: "90%",
      fontSize: 18,
      marginTop: 10,
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 20,
    },
    tinyLogo: {
      width: 200,
      height: 200,
      marginTop: 0,
      borderRadius: 100,
      padding: 10,
      marginHorizontal: 20,
    },
    
});