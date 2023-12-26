import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import ComponenteMenu from "../components/Menu";
import ComponenteTitulo from "../components/ComponenteTitulo";
import ComponenteInput from "../components/ComponenteInput";
import ModalComponent from "../components/ComponenteModal";

const ContainerHome = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #384046;
`;

const ContainerTitulos = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerOpcoes = styled.View`
  height: 10%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const ComponenteFiltro = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  border-radius: 10px;
  background: #bbf246;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerLista = styled.ScrollView`
  height: 60%;
  width: 100%;
  display: flex;
  margin-bottom: 80px;
`;

const ComponenteItens = styled.View`
  background: #192026;
  width: 90%;
  height: 103px;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;

const DataItems = [
  { nome: "Exercicio 1", qtd: 33 },
  { nome: "Exercicio 2", qtd: 33 },
  { nome: "Exercicio 3", qtd: 33 },
  { nome: "Exercicio 4", qtd: 33 },
  { nome: "Exercicio 5", qtd: 33 },
  { nome: "Exercicio 6", qtd: 33 },
  { nome: "Exercicio 7", qtd: 33 },
];

const ContainerListItem1 = styled.View`
  background: #d9d9d9;
  width: 30%;
  border-radius: 10px;
  margin: 10px;
`;

const ContainerListItem2 = styled.View`
  width: 50%;
  justify-content: center;
`;

const ItemTextoUm = styled.Text`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  top: 10%;
  color: #fff;
`;

const ItemTextoDois = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
`;

const ContainerListItem3 = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

const ComponenteBotaoAcessarItem = styled.TouchableOpacity`
  width: 23px;
  height: 23px;
  background: #bbf246;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export default function Home() {
  const [isVisibleModal, setVisibleModal] = useState(false);
  const navigation = useNavigation();
  
  return (
    <ContainerHome>
      <ContainerTitulos>
        <ComponenteTitulo
          isTituloPrincipal={false}
          isColor={"#fff"}
          recebeTexto="Gerenciamentos dos"
        />
        <ComponenteTitulo
          isTituloPrincipal={true}
          isColor={"#fff"}
          recebeTexto="Exercícios"
        />
      </ContainerTitulos>
      <ContainerOpcoes>
        <ComponenteInput
          recebeDiminuir={true}
          recebePlaceholder="Procurar"
          recebeSecurity={false}
        />
        <ComponenteFiltro>
          <Ionicons size={25} name="filter-outline"></Ionicons>
        </ComponenteFiltro>
      </ContainerOpcoes>
      <ContainerLista
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {DataItems.map((items) => {
          return (
            <ComponenteItens key={items.nome}>
              <ContainerListItem1 />
              <ContainerListItem2>
                <ItemTextoUm>{items.nome}</ItemTextoUm>
                <ItemTextoDois>{items.qtd} exercicios</ItemTextoDois>
              </ContainerListItem2>
              <ContainerListItem3>
                <ComponenteBotaoAcessarItem onPress={() => {navigation.navigate("Items")}}>
                  <Ionicons
                    size={15}
                    color={"#192026"}
                    name="chevron-forward-outline"
                  ></Ionicons>
                </ComponenteBotaoAcessarItem>
              </ContainerListItem3>
            </ComponenteItens>
          );
        })}
      </ContainerLista>

      {isVisibleModal && (
        <ModalComponent
          visible={isVisibleModal}
          closeModal={() => setVisibleModal(false)}
        />
      )}
      <ComponenteMenu onPress={() => setVisibleModal(!isVisibleModal)} />
    </ContainerHome>
  );
}
