import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
} from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components";
import ComponenteTitulo from "../ComponenteTitulo";
import { isColor } from "react-native-reanimated";

const EstiloBotao = styled.TouchableOpacity`
  width: ${(props) => (props.isBotaoPrincipal ? "90%" : "70%")};
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => (props.isBotaoPrincipal ? "#BBF246" : "#BBF24600")};
  border: 2px solid #bbf246;
  margin: 4%;
  flex-direction: row;
`;

const EstiloBrand = styled.Image`
  position: relative;
  right: 20px;
`;

const EstiloDoText = styled.Text`
  font-size: ${(props) => (props.isBotaoPrincipal ? "26px" : "15px")};
  font-weight: 700;
  color: ${(props) => props.isColor};
  text-align: ${(props) => (props.isJustify ? "center" : "auto")};
`;

export default function ComponenteBotao({
  recebeNomeBotao,
  isBotaoPrincipal,
  recebeTextoComplementar,
  isColor,
  onPress,
  recebeLogo
}) {
  const handlePress = () => {
    console.log("Botão pressionado"); // Adicione esta linha para depuração
    navigation.navigate("Sucesso");
  };

  console.log(isBotaoPrincipal);

  return (
    <EstiloBotao isBotaoPrincipal={isBotaoPrincipal} onPress={onPress}>
      {recebeLogo && !isBotaoPrincipal ? (
        <EstiloBrand source={require("../../../assets/brandgoogle.png")} />
      ) : (
        ""
      )}
      <EstiloDoText isColor={isColor}>{recebeTextoComplementar}</EstiloDoText>
    </EstiloBotao>
  );
}
