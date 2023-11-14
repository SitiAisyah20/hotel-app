import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from '../src/pages/HomeScreen'
import FavoriteScreen from '../src/pages/FavoriteScreen'
import ProfileScreen from '../src/pages/ProfileScreen'
import SettingScreen from '../src/pages/SettingScreen'

// Screen  names
const homeName = 'Home'
const favoriteName = 'Favorite'
const profileName = 'Profile'
const settingName = 'Setting'

const Tab = createBottomTabNavigator()
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === favoriteName) {
              iconName = focused ? 'heart' : 'heart-outline'
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline'
            } else if (rn === settingName) {
              iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >

        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name={favoriteName} component={FavoriteScreen} options={{ headerShown: false }} />
        <Tab.Screen name={profileName} component={ProfileScreen} options={{ headerShown: false }} />
        <Tab.Screen name={settingName} component={SettingScreen} options={{ headerShown: false }} />


      </Tab.Navigator>
    </NavigationContainer>
  )
}