import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function SelecionadorUnidade({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="droppdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="ºC" value="metric" />
        <Picker.Item label="ºF" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 30,
      },
      default: {
        top: 30,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});
