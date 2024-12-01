import React, {useState} from 'react';
import {RestuarantsScreen} from './src/features/screens/restuatant.screen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/utilities/safe-area.components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantsContextProvider} from './src/services/restuarants/restuarants.context';

const Tab = createBottomTabNavigator();

const Map = () => (
  <SafeArea>
    <Text> Maps</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName;
                if (route.name === 'Restuarant') {
                  iconName = 'fast-food-outline';
                } else if (route.name === 'Settings') {
                  iconName = 'settings-outline';
                } else if (route.name === 'Maps') {
                  iconName = 'map-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Restuarant" component={RestuarantsScreen} />
            <Tab.Screen name="Maps" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantsContextProvider>
    </ThemeProvider>
  );
};
export default App;
