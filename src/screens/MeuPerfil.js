// Exemplo do arquivo HomeScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ComponenteTitulo from "../components/ComponenteTitulo";
import ComponenteInput from "../components/ComponenteInput";
import ComponenteBotao from "../components/ComponenteBotao";

const ContainerPrincipal = styled.View`
  background: #384046;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerSecundario = styled.View`
  background: #192026;
  height: 60%;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerIcons = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const ContainerIcon = styled.View`
  height: 54px;
  width: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #384046;
  border-radius: 10px;
`;

const ComponenteItensProfile = styled.View`
  height: 50%;
  width: 90%;
`;

const ComponenteSairProfile = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ComponenteEspacamento = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

const ContainerImagem = styled.View`
    position: absolute;
    top: 0;
    height: 50%;
    width: 100%;
`;

const ContainerImagemUnsplash = styled.Image`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
`;

export default function MeuPerfil() {
  const navigation = useNavigation();

  return (
    <ContainerPrincipal>
        <ContainerImagem>
            <ContainerImagemUnsplash source={{uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} />
        </ContainerImagem>

      <ContainerSecundario>
        <ContainerIcons>
          <ContainerIcon>
            <Text>🔥</Text>
          </ContainerIcon>

          <ContainerIcon>
            <Text>🏋️‍♂️</Text>
          </ContainerIcon>

          <ContainerIcon>
            <Text>❤️</Text>
          </ContainerIcon>
        </ContainerIcons>
        <ComponenteItensProfile>
          <ComponenteEspacamento>
            <ComponenteTitulo
              isTituloPrincipal={true}
              recebeTexto="Kanael Kenny de Aquino"
            />
          </ComponenteEspacamento>

          <ComponenteEspacamento>
            <ComponenteTitulo
              isTituloPrincipal={false}
              recebeTexto="E-mail cadastrado:"
              isJustify={false}
            />
            <ComponenteInput recebePlaceholder="kanael.dev@gmail.com" />
          </ComponenteEspacamento>

          <ComponenteEspacamento>
            <ComponenteTitulo
              isTituloPrincipal={false}
              recebeTexto="Telefone cadastrado:"
              isJustify={false}
            />
            <ComponenteInput recebePlaceholder="kanael.dev@gmail.com" />
          </ComponenteEspacamento>
        </ComponenteItensProfile>
        <ComponenteSairProfile>
          <ComponenteBotao
            isBotaoPrincipal={true}
            isColor={"#192026"}
            recebeTextoComplementar="Ir para a tela inicial"
            recebeLogo={false}
            onPress={() => navigation.navigate("Home")}
          />
        </ComponenteSairProfile>
      </ContainerSecundario>
    </ContainerPrincipal>
  );
}
