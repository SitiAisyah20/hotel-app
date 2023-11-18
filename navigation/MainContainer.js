import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../src/pages/HomeScreen';
import FavoriteScreen from '../src/pages/FavoriteScreen';
import ProfileScreen from '../src/pages/ProfileScreen';
import SettingScreen from '../src/pages/setting/SettingScreen';
import { SettingRoutes } from './stacks/SettingStack';

// Screen names
const homeName = 'Home';
const favoriteName = 'Favorite';
const profileName = 'Profile';
const settingName = 'Setting page';

const tabScreenOptions = {
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
  tabBarStyle: { padding: 10, height: 70 },

};

const navigationOptions = {
  headerStyle: { backgroundColor: 'tomato' },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerTitleAlign: 'center',
};

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          ...tabScreenOptions,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === favoriteName) {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === settingName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{ ...navigationOptions }}
        />
        <Tab.Screen
          name={favoriteName}
          component={FavoriteScreen}
          options={{ ...navigationOptions }}
        />
        <Tab.Screen
          name={profileName}
          component={ProfileScreen}
          options={{ ...navigationOptions }}
        />
        <Tab.Screen
          name={settingName}
          component={SettingRoutes}
          options={{ headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
