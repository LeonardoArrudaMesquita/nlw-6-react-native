import React from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guildSelected: GuildProps) => void;
};

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "Imagem",
      owner: true,
    },
    {
      id: "2",
      name: "Gold",
      icon: "Imagem",
      owner: true,
    },
    {
      id: "3",
      name: "Gold",
      icon: "Imagem",
      owner: true,
    },
    {
      id: "4",
      name: "Gold",
      icon: "Imagem",
      owner: true,
    },
    {
      id: "5",
      name: "Gold",
      icon: "Imagem",
      owner: true,
    },
    {
      id: "6",
      name: "Gold",
      icon: "Imagem",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered={true} />}
        ListHeaderComponent={() => <ListDivider isCentered={true} />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        style={styles.guilds}
      />
    </View>
  );
}