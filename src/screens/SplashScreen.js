import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #011627;
`;

const TituloSplash = styled.Text`
    font-size: 43px;
    font-weight: 700;
    color: #fff;
    margin: 5%;
    transform: rotate(-15deg);
`;

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navegar para a tela de login após 5 segundos
      navigation.navigate("TelaLogin");
    }, 1000);

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
  }, [navigation]);

  return (
    <Container>
      <Image source={require("../../assets/pilates_inicial.png")} />
      <TituloSplash>SimpleShape</TituloSplash>
    </Container>
  );
}
