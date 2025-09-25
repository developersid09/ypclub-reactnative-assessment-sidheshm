// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import EventsScreen from "./screens/EventsScreen";
import { RegistrationProvider } from "./context/RegistrationContext";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RegistrationProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Events" component={EventsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </RegistrationProvider>
  );
}
