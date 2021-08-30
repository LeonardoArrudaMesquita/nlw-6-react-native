import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";

import { COLLECTION_APPOINTMENTS } from "../../configs/database";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  const loadAppointments = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storedAppointments: AppointmentProps[] = storage
      ? JSON.parse(storage)
      : [];

    if (category) {
      setAppointments(
        storedAppointments.filter(
          (appointment) => appointment.category === category
        )
      );
    } else {
      setAppointments(storedAppointments);
    }

    setLoading(false);
  };

  const handleCategorySelect = (categoryId: string) =>
    categoryId === category ? setCategory("") : setCategory(categoryId);

  const handleAppointmentDetails = (appointmentDetails: AppointmentProps) => {
    navigation.navigate("AppointmentDetails", { appointmentDetails });
  };

  const handleAppointmentCreate = () => {
    navigation.navigate("AppointmentCreate");
  };

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas Agendadas"
            subtitle={`Total ${appointments.length}`}
          />
          <FlatList
            style={styles.matches}
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
          />
        </>
      )}
    </Background>
  );
}
