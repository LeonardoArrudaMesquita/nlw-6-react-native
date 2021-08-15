import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    borderRadius: 8,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRightColor: theme.colors.line,
    borderRightWidth: 1,
  },
  icon: {
    height: 18,
    width: 24,
  },
  title: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
  },
});
