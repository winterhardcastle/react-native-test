import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is react native!</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
        title="Increment"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  counter: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#23ff43",
  },
});
