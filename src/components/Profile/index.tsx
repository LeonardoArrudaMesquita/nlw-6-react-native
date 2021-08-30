import React, { useState } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { Dialog } from "../Dialog";

import { styles } from "./styles";

export function Profile() {
  const { user, signOut } = useAuth();
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setOpenSignOutModal(false);
  };
  const handleOpenSignOutModal = () => setOpenSignOutModal(true);
  const handleCloseSignOutModal = () => setOpenSignOutModal(false);

  return (
    <>
      <View style={styles.container}>
        <RectButton onPress={handleOpenSignOutModal}>
          <Avatar urlImage={user.avatar} />
        </RectButton>
        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>Olá, </Text>
            <Text style={styles.username}>{user.firstName}</Text>
          </View>
          <Text style={styles.message}>Hoje é dia de vitória</Text>
        </View>
      </View>

      <Dialog
        visible={openSignOutModal}
        closeModal={handleCloseSignOutModal}
        text="Deseja sair do GamePlay?"
        cancel={handleCloseSignOutModal}
        ok={handleSignOut}
      />
    </>
  );
}
