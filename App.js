import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #011627;
`;

import TelaLogin from "./src/screens/TelaLogin";
import CadastrarUsuario from "./src/screens/CadastrarUsuario";
import SplashScreen from "./src/screens/SplashScreen";
import Sucesso from "./src/screens/Sucesso";
import Home from "./src/screens/Home";
import Items from "./src/screens/Items";
import MeuPerfil from "./src/screens/MeuPerfil";

const Stack = createNativeStackNavigator();

export default function Unsplash({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerBackTitle: "Voltar", headerShown: false }}
        />

        <Stack.Screen
          name="CadastrarUsuario"
          component={CadastrarUsuario}
          options={{ headerBackTitle: "Voltar", headerShown: false }}
        />

        <Stack.Screen
          name="Sucesso"
          component={Sucesso}
          options={{ headerBackTitle: "Voltar", headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerBackTitle: "Voltar", headerShown: false }}
        />

        <Stack.Screen
          name="Items"
          component={Items}
          options={{ headerBackTitle: "Voltar", headerShown: false }}
        />

        <Stack.Screen
          name="MeuPerfil"
          component={MeuPerfil}
          options={{ headerBackTitle: "Voltar", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
