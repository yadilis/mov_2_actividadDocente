import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Pagina1Screen from "../screens/Pagina1Screen";
import Pagina2Screen from "../screens/Pagina2Screen";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pagina1" component={ Pagina1Screen} />
            <Tab.Screen name="Pagina2" component={ Pagina2Screen} />
        </Tab.Navigator>
    );
}



export default function BottomTabNavigator(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );

}