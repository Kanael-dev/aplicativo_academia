// Exemplo do arquivo HomeScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import ComponenteTitulo from "../components/ComponenteTitulo";
import ComponenteBotao from "../components/ComponenteBotao";
import ComponenteInput from "../components/ComponenteInput";
import ComponenteRetorno from "../components/ComponenteRetorno";

// Estilo deste container

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #011627;
`;

const ContainerOpcoes = styled.View`
  height: 85%;
  width: 100%;
  background: #192026;
  position: absolute;
  bottom: 0;
  border-radius: 30px 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerRetornar = styled.View`
  height: 15%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  padding-left: 20px;
`;

const ContainerTitulo = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerGoogle = styled.View`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerOutros = styled.View`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerFormulario = styled.View`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sucesso = ({recebeTextoUm, recebeTextoDois, recebeTextoTres}) => {
  const navigation = useNavigation();

  return (
    <Container>
        <ContainerRetornar>
          <ComponenteRetorno onPress={() => navigation.navigate("TelaLogin")}/>
        </ContainerRetornar>

        <ContainerOpcoes>
          <ContainerTitulo>
            <ComponenteTitulo
              isColor={"#fff"}
              isTituloPrincipal={false}
              recebeTexto={"Pronto para começar a treinar?"}
            />
            <ComponenteTitulo
              isColor={"#fff"}
              isTituloPrincipal={true}
              isJustify={true}
              recebeTexto="Seu acesso foi criado com sucesso!?"
            />
          </ContainerTitulo>

          <Image style={{margin: 30}} source={require("../../assets/sucess.png")}/>

          <ComponenteBotao
            isBotaoPrincipal={true}
            recebeTextoComplementar="Ir para a tela inicial"
            isColor={"#192026"}
            onPress={() => navigation.navigate("TelaLogin")}
          />
        </ContainerOpcoes>
    </Container>
  );
};

export default Sucesso;
