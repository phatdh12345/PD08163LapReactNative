import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={styles.container}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});