import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from '../../src/pages/setting/SettingScreen';
import EditProfile from '../../src/pages/setting/EditProfile';
import LoginScreen from '../../src/pages/LoginScreen';

const Stack = createStackNavigator();

const navigationOptions = {
  headerStyle: { backgroundColor: 'tomato' },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerTitleAlign: 'center',
};
export const SettingRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingScreen} options={{ ...navigationOptions }} />
      <Stack.Screen name="Edit Profile" component={EditProfile} options={{ ...navigationOptions }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


