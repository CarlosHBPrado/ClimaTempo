import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/index";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function DetalhesTempo({ currentWeather, unitsSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} mp/h`;

  return (
    <View style={styles.detalhesTempo}>
      <View style={styles.linhaDetalhesTempo}>
        <View
          style={{
            ...styles.caixaDetalhesTempo,
            borderRightWidth: 1,
            borderColor: BORDER_COLOR,
          }}
        >
          <View style={styles.linhaDetalhesTempo}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRIMARY_COLOR}
            />
          </View>
          <View style={styles.itensDetalhesTempo}>
            <Text>Sensação de:</Text>
            <Text style={styles.textSecondary}>{feels_like} º</Text>
          </View>
        </View>
        <View style={styles.caixaDetalhesTempo}>
          <View style={styles.linhaDetalhesTempo}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={PRIMARY_COLOR}
            />
          </View>
          <View style={styles.itensDetalhesTempo}>
            <Text>Humidade:</Text>
            <Text style={styles.textSecondary}>{humidity} %</Text>
          </View>
        </View>
      </View>
      <View style={styles.linhaDetalhesTempo}>
        <View
          style={{
            ...styles.caixaDetalhesTempo,
            borderRightWidth: 1,
            borderColor: BORDER_COLOR,
          }}
        >
          <View style={styles.linhaDetalhesTempo}>
            <FontAwesome5
              name="wind"
              size={30}
              color={PRIMARY_COLOR}
            />
          </View>
          <View style={styles.itensDetalhesTempo}>
            <Text>Velocidade do vento:</Text>
            <Text style={styles.textSecondary}>{windSpeed}</Text>
          </View>
        </View>
        <View style={styles.caixaDetalhesTempo}>
          <View style={styles.linhaDetalhesTempo}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={PRIMARY_COLOR}
            />
          </View>
          <View style={styles.itensDetalhesTempo}>
            <Text>Pressão:</Text>
            <Text style={styles.textSecondary}>{pressure} hPa</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detalhesTempo: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  linhaDetalhesTempo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  caixaDetalhesTempo: {
    flex: 1,
    padding: 20,
  },
  itensDetalhesTempo: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: "700",
    margin: 7,
  },
});
