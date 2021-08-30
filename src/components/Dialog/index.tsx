import React from "react";
import { Text, View } from "react-native";

import { ModalView } from "../ModalView";

import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  text: string;
  visible: boolean;
  closeModal: () => void;
  cancel: () => void;
  ok: () => void;
};

export function Dialog({ text, cancel, ok, visible, closeModal }: Props) {
  return (
    <ModalView visible={visible} closeModal={closeModal} height={500}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.buttonWrapper}>
          <RectButton style={styles.button} onPress={cancel}>
            <View style={styles.border}>
              <Text style={styles.title}>Não</Text>
            </View>
          </RectButton>
          <RectButton style={[styles.button, styles.ok]} onPress={ok}>
            <Text style={styles.title}>Sim</Text>
          </RectButton>
        </View>
      </View>
    </ModalView>
  );
}
