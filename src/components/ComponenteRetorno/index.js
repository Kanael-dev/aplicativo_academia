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
import { Ionicons } from "@expo/vector-icons";


const Retorno = styled.TouchableOpacity`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

const TextoRetorno = styled.Text`
    color: #fff;
    font-size: 16px;

`;

export default function ComponenteRetorno({onPress}){
    return(
        <Retorno onPress={onPress}>
            <Ionicons name="chevron-back-outline" color={"#fff"} size={16}></Ionicons>
            <TextoRetorno>Retornar</TextoRetorno>
        </Retorno>
    )
}