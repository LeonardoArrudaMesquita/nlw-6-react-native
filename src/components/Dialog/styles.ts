import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    textAlign: "center",
    marginBottom: 24,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "47%",
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  title: {
    color: theme.colors.heading,
  },
  ok: {
    backgroundColor: theme.colors.primary,
  },
  border: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.secondary30,
    borderWidth: 1,
    borderRadius: 8,
    zIndex: 1,
  },
});
