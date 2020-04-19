import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../screens/";
import { createStackNavigator } from "@react-navigation/stack";
const StackAuth = createStackNavigator();
const MyStackNavigatorAuth = () => (
  <StackAuth.Navigator headerMode="none">
    <StackAuth.Screen name="Login" component={Login} />
  </StackAuth.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <MyStackNavigatorAuth />
    </NavigationContainer>
  );
}
