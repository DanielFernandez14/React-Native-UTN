import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";
import ScreenWrapper from "../components/ScreenWraper";
import { sharedStyles } from "../styles/sharedStyle";

export default function ProfileScreen() {
  return (
    <ScreenWrapper title="Mi Perfil">
      <View style={styles.header}>
        <Avatar.Icon size={80} icon="account" />
        <Text variant="headlineSmall" style={styles.name}>
          Daniel
        </Text>
      </View>

      <Card style={sharedStyles.card}>
        <Card.Content>
          <Text style={styles.text}>Email: dani@gmail.com</Text>
          <Text style={styles.text}>Rol: Alumno</Text>
        </Card.Content>
      </Card>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  name: {
    marginTop: 12,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 8,
    color: "#49454f",
  },
});
