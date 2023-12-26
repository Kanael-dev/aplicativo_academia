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
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const EstiloInputs = styled.TextInput`
  width: ${(props) => (props.recebeDiminuir ? "70%" : "90%")};
  height: 56px;
  background: #8c9093;
  border-radius: 10px;
  margin: 2%;
  color: #ffff;
  padding-left: 15px;
  font-size: 15px;
`;

export default function ComponenteInput({
  recebeSecurity,
  recebePlaceholder,
  typeTeclado,
  onInputChange,
  value,
  recebeDiminuir
}) {
  return (
    <EstiloInputs
      placeholder={recebePlaceholder}
      secureTextEntry={recebeSecurity}
      keyboardType={typeTeclado || "default"}
      recebeDiminuir={recebeDiminuir}
      placeholderTextColor="#ccc"
    />
  );
}
