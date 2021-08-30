import React from "react";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import DiscordSvg from "../../assets/discord.svg";

type Props = {
  urlImage: string | null;
};

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <>
      {urlImage ? (
        <LinearGradient
          style={styles.container}
          colors={[secondary50, secondary70]}
        >
          <Image source={{ uri: urlImage }} style={styles.avatar} />
        </LinearGradient>
      ) : (
        <View style={[styles.container, styles.discord]}>
          <DiscordSvg width={30} height={30} />
        </View>
      )}
    </>
  );
}
