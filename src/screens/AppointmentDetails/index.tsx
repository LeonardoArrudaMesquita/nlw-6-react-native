import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, View, Text, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import BannerImg from "../../assets/banner.png";
import DiscordImg from "../../assets/discord.png";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
    {
      id: "2",
      username: "Leonardo Arruda",
      avatar_url: "https://github.com/LeonardoArrudaMesquita.png",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida do md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon icon={DiscordImg} title="Entrar na partida" />
      </View>
    </Background>
  );
}
