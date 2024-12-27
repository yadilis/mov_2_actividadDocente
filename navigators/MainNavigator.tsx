import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Pantallas
import Welcome from '../screens/Welcome';  // Asegúrate de que la ruta sea correcta
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import Pagina4Screen from '../screens/Pagina4Screen';
import Pagina5Screen from '../screens/Pagina5Screen';
import Pagina6Screen from '../screens/Pagina6Screen';
import Pagina7Screen from '../screens/Pagina7Screen';
import Pagina8Screen from '../screens/Pagina8Screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Navegador principal que maneja el Stack y el Drawer
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Drawer" component={MyDrawer} /> 
    </Stack.Navigator>
  );
}

// Navegador del Drawer
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pagina1" component={Pagina1Screen} />
      <Drawer.Screen name="Pagina2" component={Pagina2Screen} />
      <Drawer.Screen name="Pagina3" component={Pagina3Screen} />
      <Drawer.Screen name="Pagina4" component={Pagina4Screen} />
      <Drawer.Screen name="Pagina5" component={Pagina5Screen} />
      <Drawer.Screen name="Pagina6" component={Pagina6Screen} />
      <Drawer.Screen name="Pagina7" component={Pagina7Screen} />
      <Drawer.Screen name="Pagina8" component={Pagina8Screen} />
    </Drawer.Navigator>
  );
}

// Componente que envuelve todo el contenedor de navegación
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
