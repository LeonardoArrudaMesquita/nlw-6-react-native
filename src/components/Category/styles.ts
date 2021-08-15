import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
    position: "absolute",
    right: 7,
    top: 7,
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    position: "absolute",
    right: 7,
    top: 7,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    marginTop: 15,
  },
});
