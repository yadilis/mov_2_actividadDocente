import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import React, { useState } from 'react'; 

export default function Tarjeta4(props: any) {
  const [visible, setVisible] = useState(false); 

  return (
    <TouchableOpacity onPress={() => setVisible(true)} style={styles.card}>
      <Text>{props.datos.name.first}</Text> 
    
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.modal}>
          <Image source={{ uri: props.datos.picture.large }} style={styles.imag} /> 
          
       
          <Text style={styles.txtTitulo}>
            {props.datos.name.first} {props.datos.name.last}
          </Text>
          
       
          <Text style={styles.modalText}>Email: {props.datos.email}</Text>
          <Text style={styles.modalText}>Gender: {props.datos.gender}</Text>
          <Text style={styles.modalText}>Location: {props.datos.location.city}, {props.datos.location.country}</Text>

    
          <Button color="purple" title="REGRESAR" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  imag: {
    height: 250,
    width: 250,
    borderRadius: 125,  
    resizeMode: 'contain',
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  txtTitulo: {
    fontSize: 40,
    color: 'white',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
});
