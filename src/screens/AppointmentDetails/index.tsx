import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  FlatList,
  Alert,
  Share,
  Platform,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import BannerImg from "../../assets/banner.png";
import DiscordImg from "../../assets/discord.png";

import { AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { Member, MemberProps } from "../../components/Member";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { api } from "../../services/api";

type Params = {
  appointmentDetails: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  const { appointmentDetails } = route.params as Params;

  const fetchGuildWidget = async () => {
    try {
      const response = await api.get(
        `/guilds/${appointmentDetails.guild.id}/widget.json`
      );

      setWidget(response.data);
    } catch {
      Alert.alert(
        "Verifique as configurações do servidor. O widget precisa estar habilitado!"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShareInvitation = () => {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${appointmentDetails.guild.name}`
        : widget.instant_invite;

    Share.share({ message, url: widget.instant_invite });
  };

  const handleOpenGuild = () => {
    Linking.openURL(widget.instant_invite);
  };

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          appointmentDetails.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{appointmentDetails.guild.name}</Text>
          <Text style={styles.subtitle}>{appointmentDetails.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget?.members?.length | 0}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      )}

      {appointmentDetails.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon
            onPress={handleOpenGuild}
            icon={DiscordImg}
            title="Entrar na partida"
          />
        </View>
      )}
    </Background>
  );
}
