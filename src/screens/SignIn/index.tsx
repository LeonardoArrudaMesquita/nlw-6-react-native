import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import DiscordImg from "../../assets/discord.png";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";

export function SignIn() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            icon={DiscordImg}
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}
