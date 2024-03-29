import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 62,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 66,
    height: 62,
  },
});
