import { StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matches: {
    marginTop: 24,
  },
});
