import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import WebViewScreen from './components/WebViewScreen';
import ContactScreen from './components/ContactScreen';
import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#c4302b" />
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#c4302b',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
              },
              drawerStyle: {
                backgroundColor: '#fff',
                width: 280,
              },
              drawerActiveTintColor: '#c4302b',
              drawerInactiveTintColor: '#666',
            }}
          >
            <Drawer.Screen 
              name="Accueil" 
              component={WebViewScreen} 
              options={{ 
                title: 'RCOLFM 93.6',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                )
              }}
            />
            <Drawer.Screen 
              name="Contact" 
              component={ContactScreen} 
              options={{ 
                title: 'Nous contacter',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="call" size={size} color={color} />
                )
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}