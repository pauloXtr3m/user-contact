import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "src/screens/Home";
import {Contact} from "@/screens/Contact";
import {NavigationProp} from "@react-navigation/core";
import {ContactSuccess} from "@/screens/ContactSuccess";

const { Navigator, Screen } = createStackNavigator();

type AppBaseStackParamList = {
  // Your custom param type belongs here.
  Home: {},
  Contact: {},
}
export type AppBaseNavigationProp = NavigationProp<AppBaseStackParamList>;
export function AppBaseRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Screen name={'Home'} component={Home} />
      <Screen name={'Contact'} component={Contact} />
      <Screen name={'ContactSuccess'} component={ContactSuccess} />
    </Navigator>
  )
}
