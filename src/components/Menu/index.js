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

const ContainerMenu = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 10%;
  background: #192026;
  position: absolute;
  bottom: 0;
`;

const ContainerTouch = styled.TouchableOpacity`
  height: ${(props) => (props.isPrincipal ? "70%" : "100%")};
  width: ${(props) => (props.isPrincipal ? "15%" : "35%")};
  background: ${(props) => (props.isPrincipal ? "#BBF246" : "#BBF24600")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export default function ComponenteMenu({isPrincipal, onPress }) {

  const navigation = useNavigation();

  return (
    <ContainerMenu>
      <ContainerTouch onPress={() => navigation.navigate("Home")}>
        <Ionicons color={"#fff"} size={24} name="home-outline"></Ionicons>
      </ContainerTouch>
      <ContainerTouch onPress={onPress} isPrincipal={true}>
        <Ionicons color={"#192026"} size={24} name="add-outline" />
      </ContainerTouch>
      <ContainerTouch onPress={() => navigation.navigate("MeuPerfil")}>
        <Ionicons color={"#fff"} size={24} name="person-outline"></Ionicons>
      </ContainerTouch>
    </ContainerMenu>
  );
}
