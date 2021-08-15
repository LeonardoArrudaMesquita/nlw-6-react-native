import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  content: {
    flex: 1,
  },
  header: {
    width: "100%",
    color: theme.colors.heading,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  category: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
  },
  playersInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  player: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
  },
  guildIconContainer: {
    width: 68,
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
