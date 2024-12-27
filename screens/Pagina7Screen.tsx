import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function Pagina75Screen() {
  const [kelvin, setKelvin] = useState(0);
  const [celcius, setCelcius] = useState(0);
  const [farh, setFarh] = useState(0);

  useEffect(() => {
    if (celcius > 100) {
      Alert.alert("⚠️Mensaje", "Ha superado la temperatura máxima");
    }
  }, [celcius]);

  function calcular() {
    setCelcius(kelvin - 273.15);
    setFarh(((kelvin - 273.15) * 9) / 5 + 32);
  }

  return (
    <View style={styles.container}>
      <Text>Pagina65Screen</Text>
      <TextInput
        placeholder="Ingresar temperatura"
        keyboardType="numeric"
        style={{ fontSize: 30, height: 50, width: '70%' }}
        onChangeText={(texto) => setKelvin(+texto)}
      />
      <Button title="Calcular" color="green" onPress={() => calcular()} />
      <View style={styles.linea} />
      <Text style={styles.txtRespuesta}>
        Temperatura en Celsius: {celcius}
      </Text>
      <Text style={styles.txtRespuesta}>
        Temperatura en Fahrenheit: {farh}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  linea: {
    width: '90%',
    height: 5,
    margin: 10,
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    flex: 1,
  },
  txtRespuesta: {
    fontSize: 25,
  },
});