import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import ComponenteTitulo from "../ComponenteTitulo";
import ComponenteInput from "../ComponenteInput";
import ComponenteBotao from "../ComponenteBotao";

const ContainerModal = styled.View`
  background: rgba(25, 32, 38, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 99;
`;

const ModalOpcao = styled.View`
  position: absolute;
  bottom: 0;
  height: 60%;
  width: 100%;
  background: #192026;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const ContainerTopo = styled.View`
  height: 20%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ContainerPricipalItems = styled.View`
  height: 60%;
  width: 100%;
  justify-content: center;
`;

export default function ModalComponentCadastro({ isVisible, closeModal }){
  return (
    <ContainerModal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <ModalOpcao>
          <ContainerTopo>
            <ComponenteTitulo
              isColor={"#fff"}
              isJustify={false}
              isTituloPrincipal={true}
              recebeTexto="Cadastrar exercicio"
            />
            <TouchableOpacity onPress={closeModal}>
              <Ionicons color={"#fff"} size={25} name="close-outline" />
            </TouchableOpacity>
          </ContainerTopo>

          <ContainerPricipalItems>
            <ComponenteTitulo style={{marginLeft: 100, paddingLeft: 100}} isTituloPrincipal={false} recebeTexto="Nome do exercicio"/>
            <ComponenteInput recebePlaceholder="Nome do exercicio" />
            <ComponenteBotao
              isBotaoPrincipal={true}
              isColor={"#192026"}
              recebeLogo={false}
              recebeTextoComplementar="Registrar plano"
            />
          </ContainerPricipalItems>
        </ModalOpcao>
      </Modal>
    </ContainerModal>
  );
};