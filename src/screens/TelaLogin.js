import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components";
import ComponenteTitulo from "../components/ComponenteTitulo"
import ComponenteBotao from "../components/ComponenteBotao";
import { useNavigation } from '@react-navigation/native';
import ComponenteInput from "../components/ComponenteInput";
const { width, height } = Dimensions.get("window");

// Estilos

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #011627;
`;

const ContainerOpcoes = styled.View`
  height: 70%;
  width: 100%;
  background: #192026;
  position: absolute;
  bottom: 0;
  border-radius: 30px 30px 0 0;
`;

const ContainerTitulos = styled.View`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerEsqueci = styled.View`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10%;
`;

const ContainerDemais = styled.View`
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const EstiloInputs = styled.TextInput`
  width: 90%;
  height: 56px;
  background: #8c9093;
  border-radius: 10px;
  margin: 2%;
  color: #ffff;
  padding-left: 15px;
  font-size: 15px;
`;

// Estilos

export default function TelaLogin() {

  const navigation = useNavigation();

  return (
    <Container>
      <ContainerOpcoes>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ContainerTitulos>
            {/* Container titulo*/}
            <ComponenteTitulo
              isTituloPrincipal={false}
              recebeTexto="Vamos exercitar?"
            />
            <ComponenteTitulo
              isTituloPrincipal={true}
              recebeTexto="Realizar login"
            />
            {/* Container titulo*/}
          </ContainerTitulos>

          <ContainerTitulos>
            {/* Container inputs*/}
            <ComponenteInput recebeSecurity={false} recebePlaceholder="E-mail"/>
            <ComponenteInput recebeSecurity={true} recebePlaceholder="Senha"/>
            {/* Container inputs*/}
          </ContainerTitulos>

          <ContainerEsqueci>
            {/* Container esqueci senha*/}
            <ComponenteTitulo
              isTituloPrincipal={false}
              recebeTexto="Esqueceu a senha?"
            />
            {/* Container esqueci senha*/}
          </ContainerEsqueci>

          <ContainerDemais>
            {/* Container esqueci senha*/}
            <ComponenteBotao 
              isColor={"#192026"} 
              recebeTextoComplementar="Logar" 
              isBotaoPrincipal={true} onPress={() =>  navigation.navigate("Home")}
            />
            <ComponenteTitulo
              isTituloPrincipal={false}
              recebeTexto="Ou"
            />

            <ComponenteBotao
              recebeTextoComplementar="Login com gmail"
              isBotaoPrincipal={false}
              recebeLogo={true}
              isColor={"#fff"}
            />

            <TouchableOpacity style={{flex: 1, flexDirection: "row", gap: 3}} onPress={() =>  navigation.navigate("CadastrarUsuario")} >
              <ComponenteTitulo
                isTituloPrincipal={false}
                recebeTexto="Não possui uma conta?"
              />
              <Text style={{color: "#BBF246"}}>Cadastre-se</Text>
            </TouchableOpacity>

            {/* Container esqueci senha*/}
          </ContainerDemais>
        </KeyboardAvoidingView>
      </ContainerOpcoes>
    </Container>
  );
}
