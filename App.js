import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {RestaurantsContextProvider} from './src/services/restuarants/restuarants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';
import {FavouritesContextProvider} from './src/services/favorites/favorites.context';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';
import {firebase} from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAAmUtiFrYBqQoKHrJNTxUUhEoXKdlvAUI',
  authDomain: 'meals-fb751.firebaseapp.com',
  projectId: 'meals-fb751',
  storageBucket: 'meals-fb751.firebasestorage.app',
  messagingSenderId: '523296395980',
  appId: '1:523296395980:web:ad9fd8b0be2c512ca62869',
  databaseURL: 'https://meals-fb751-default-rtdb.firebaseio.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
};
export default App;
