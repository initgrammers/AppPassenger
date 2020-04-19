import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Login, Home, Profile, History } from "../screens/";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const BottomTabs = createMaterialBottomTabNavigator();
const MyHomeBottomTab = () => (
  <BottomTabs.Navigator
    initialRouteName="Home"
    activeColor="#FF8900"
    inactiveColor="#242A37"
    barStyle={{ backgroundColor: "#FFD428" }}
  >
    <BottomTabs.Screen
      options={{ title: "Home" }}
      name="Home"
      component={Home}
    />
    <BottomTabs.Screen
      options={{ title: "Historial" }}
      name="History"
      component={History}
    />
    <BottomTabs.Screen
      options={{ title: "Perfil" }}
      name="Profile"
      component={Profile}
    />
  </BottomTabs.Navigator>
);

const StackAuth = createStackNavigator();
const MyStackNavigatorAuth = () => (
  <StackAuth.Navigator headerMode="none">
    <StackAuth.Screen name="Login" component={Login} />
    <StackAuth.Screen name="HomeTab" component={MyHomeBottomTab} />
  </StackAuth.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <MyStackNavigatorAuth />
    </NavigationContainer>
  );
}
