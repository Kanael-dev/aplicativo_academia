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
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

import ComponenteMenu from "../components/Menu";
import ComponenteTitulo from "../components/ComponenteTitulo";
import ModalComponentCadastro from "../components/ComponenteModalCadastrar";

const ContainerPrincipal = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #384046;
`;

const ContainerTitulo = styled.View`
  height: 20%;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const ContainerLista = styled.ScrollView`
  height: 60%;
  width: 100%;
  margin-bottom: 80px;
`;

const ComponenteItens = styled.View`
  width: 90%;
  height: 42px;
  border: 2px solid #192026;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const ItemTextoUm = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const ComponenteUm = styled.View``;

const ComponenteDois = styled.View``;

const DataExercicios = [
  { nome: "Peek deck", id: 1, executado: true },
  { nome: "Exercicios dois", id: 2, executado: true },
  { nome: "Peek deck", id: 3, executado: true },
  { nome: "Peek deck", id: 4, executado: false },
  { nome: "Peek deck", id: 5, executado: false },
  { nome: "Peek deck", id: 6, executado: false },
  { nome: "Peek deck", id: 7, executado: true },
  { nome: "Peek deck", id: 8, executado: true },
  { nome: "Peek deck", id: 9, executado: true },
  { nome: "Peek deck", id: 10, executado: true },
  { nome: "Peek deck", id: 11, executado: true },
  { nome: "Peek deck", id: 12, executado: true },
  { nome: "Peek deck", id: 13, executado: true },
];

export default function Items() {
  const [isVisibleCadastro, setVisibleCadastro] = useState(false);

  const [executados, setExecutados] = useState(
    DataExercicios.reduce((acc, item) => {
      acc[item.id] = item.executado;
      return acc;
    }, {})
  );

  const handleCheckboxPress = (id) => {
    setExecutados((prevExecutados) => {
      const novoExecutados = { ...prevExecutados, [id]: !prevExecutados[id] };
      // Aqui você pode chamar uma função para atualizar os dados no backend, se necessário.
      return novoExecutados;
    });
  };

  return (
    <ContainerPrincipal>
      <ContainerTitulo>
        <ComponenteTitulo
          isJustify={false}
          isTituloPrincipal={true}
          recebeTexto="Exercicios cadastrados"
        />
      </ContainerTitulo>

      <ContainerLista
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {DataExercicios.map((items) => {
          return (
            <ComponenteItens key={items.id}>
              <ComponenteUm>
                <ItemTextoUm>{items.nome}</ItemTextoUm>
              </ComponenteUm>
              <ComponenteDois>
                <Checkbox.Item
                  status={executados[items.id] ? "checked" : "unchecked"}
                  onPress={() => handleCheckboxPress(items.id)}
                  color="#BBF246"
                  style={{ borderColor: "#BBF246" }}
                />
              </ComponenteDois>
            </ComponenteItens>
          );
        })}
      </ContainerLista>

      {isVisibleCadastro && (
        <ModalComponentCadastro
          isVisible={isVisibleCadastro}
          closeModal={() => setVisibleCadastro(false)}
        />
      )}

      <ComponenteMenu onPress={() => setVisibleCadastro(!isVisibleCadastro)} />
    </ContainerPrincipal>
  );
}
