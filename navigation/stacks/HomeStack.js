import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../src/pages/HomeScreen";
import HotelDetails from "../../src/pages/HotelDetails";
import LoginScreen from "../../src/pages/LoginScreen";
import Booking from "../../src/pages/Booking";
import SearchResult from "../../src/pages/SearchResults";

const Stack = createStackNavigator();

const navigationOptions = {
  headerStyle: { backgroundColor: "tomato" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitleAlign: "center",
};

export const HomeRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ ...navigationOptions }}
      />
      <Stack.Screen
        name="Search Results"
        component={SearchResult}
        options={{ ...navigationOptions }}
      />
      <Stack.Screen
        name="Hotel Details"
        component={HotelDetails}
        options={{ ...navigationOptions }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ ...navigationOptions }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
