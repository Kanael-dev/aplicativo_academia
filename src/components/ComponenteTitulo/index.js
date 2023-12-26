import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components";

const EstiloTexto = styled.Text`
    font-size: ${(props) => (props.isTituloPrincipal ? '26px' : '15px')};
    font-weight: ${(props) => (props.isTituloPrincipal ? 700 : 400)};
    color: ${(props) => (props.isColor)};
    text-align: ${(props) => (props.isJustify ? "center" : "auto")};
`;



export default function ComponenteTitulo({isTituloPrincipal, recebeTexto, isJustify }){
    return(
        <EstiloTexto isTituloPrincipal={isTituloPrincipal} isColor={"#fff"} isJustify={isJustify}>
            {recebeTexto}
        </EstiloTexto>
    )
}