import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import React, { useEffect, useState } from 'react'; 
import Tarjeta4 from '../components/Tarjeta4'; 

export default function Pagina6Screen() {
  const [datos, setDatos] = useState<any[]>([]);  

  useEffect(() => {
    async function leer() {
      try {
        const resp = await fetch('https://randomuser.me/api/?results=20');
        const json = await resp.json();
        setDatos(json.results); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    leer();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios</Text>
      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Tarjeta4 datos={item} />  
        )}
        contentContainerStyle={styles.flatlistContainer}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',  
    marginBottom: 20,
    textAlign: 'center',
  },
  flatlistContainer: {
    paddingBottom: 20,  
  },
});
