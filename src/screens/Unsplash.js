import React, { useEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #011627;
`;

const Unsplash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navegar para a tela de login após 5 segundos
      navigation.navigate("TelaLogin");
    }, 10000);

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
  }, [navigation]); // Adicionado navigation como dependência para evitar warnings

  return (
    <Container>
      <Text>Estou carregando....</Text>
    </Container>
  );
};

export default Unsplash;
