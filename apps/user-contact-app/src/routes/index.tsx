import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {AppBaseRoutes} from "@/routes/app.base.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppBaseRoutes />
    </NavigationContainer>
  )
}
