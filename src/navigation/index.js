import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Login, Home, History } from "../screens/";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "../screens/Loading";

const BottomTabs = createMaterialTopTabNavigator();
const MyHomeBottomTab = () => (
  <BottomTabs.Navigator
    initialRouteName="Home"
    tabBarPosition="bottom"
    tabBarOptions={{
      activeTintColor: "#FF8900",
      showIcon: true,
      inactiveTintColor: "#242A37",
      labelStyle: { textTransform: "capitalize" },
      style: { backgroundColor: "#FFD428" },
    }}
  >
    <BottomTabs.Screen
      options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      name="Home"
      component={Home}
    />
    <BottomTabs.Screen
      options={{
        title: "Historial",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="history" color={color} size={26} />
        ),
      }}
      name="History"
      component={History}
    />
    {/* <BottomTabs.Screen
      options={{ title: "Perfil" }}
      name="Profile"
      component={Profile}
    /> */}
  </BottomTabs.Navigator>
);

const StackAuth = createStackNavigator();
const MyStackNavigatorAuth = () => (
  <StackAuth.Navigator headerMode="none">
    <StackAuth.Screen name="Loading" component={Loading} />
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
