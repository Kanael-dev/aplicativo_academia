// CadastrarUsuario.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ComponenteTitulo from "../components/ComponenteTitulo";
import ComponenteBotao from "../components/ComponenteBotao";
import ComponenteInput from "../components/ComponenteInput";
import ComponenteRetorno from "../components/ComponenteRetorno";

import { useNavigation } from "@react-navigation/native";

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

const CadastrarUsuario = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerRetornar>
        <ComponenteRetorno onPress={() => navigation.navigate("TelaLogin")} />
      </ContainerRetornar>

      <ContainerOpcoes>
        <ContainerTitulo>
          <ComponenteTitulo
            isColor={"#fff"}
            isTituloPrincipal={false}
            recebeTexto="Que bom ter você aqui!"
          />
          <ComponenteTitulo
            isColor={"#fff"}
            isTituloPrincipal={true}
            recebeTexto="Como deseja criar o acesso?"
          />
        </ContainerTitulo>

        <ContainerGoogle>
          <ComponenteBotao
            isBotaoPrincipal={false}
            recebeTextoComplementar="Login com gmail"
            recebeLogo={true}
            isColor={"#fff"}
          />
        </ContainerGoogle>

        <ContainerOutros>
          <ComponenteTitulo
            isColor={"#fff"}
            isTituloPrincipal={false}
            recebeTexto="Ou preencha as informações abaixo"
          />
        </ContainerOutros>

        <ContainerFormulario>
          <ComponenteInput
            recebePlaceholder="Nome completo"
            recebeSecurity={false}
          />
          <ComponenteInput
            recebePlaceholder="Telefone"
            recebeSecurity={false}
            typeTeclado="numeric"
          />
          <ComponenteInput recebePlaceholder="E-mail" recebeSecurity={false} />
          <ComponenteInput recebePlaceholder="Senha" recebeSecurity={true} />
        </ContainerFormulario>

        <ComponenteBotao
          isBotaoPrincipal={true}
          recebeTextoComplementar="Cadastrar"
          isColor={"#192026"}
          onPress={() => {
            navigation.navigate("Sucesso");
          }}
        />
      </ContainerOpcoes>
    </Container>
  );
};

export default CadastrarUsuario;
