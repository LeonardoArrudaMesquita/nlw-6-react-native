import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 95,
    width: "100%",
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    padding: 16,
    textAlignVertical: "top",
  },
});
