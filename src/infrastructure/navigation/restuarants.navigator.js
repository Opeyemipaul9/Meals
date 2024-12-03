import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RestuarantsScreen} from '../../features/screens/restuatant.screen';
import {Text} from 'react-native';
import {RestaurantDetailScreen} from '../../features/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestuarantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
