import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {RestaurantsContextProvider} from './src/services/restuarants/restuarants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';
import {FavouritesContextProvider} from './src/services/favorites/favorites.context';
import {initializeApp} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAAmUtiFrYBqQoKHrJNTxUUhEoXKdlvAUI',
  authDomain: 'meals-fb751.firebaseapp.com',
  projectId: 'meals-fb751',
  storageBucket: 'meals-fb751.firebasestorage.app',
  messagingSenderId: '523296395980',
  appId: '1:523296395980:web:ad9fd8b0be2c512ca62869',
  databaseURL: 'https://meals-fb751-default-rtdb.firebaseio.com',
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initializeFirebase = async () => {
    try {
      const firebaseInstance = await firebase.initializeApp(firebaseConfig);
      console.log(firebaseInstance, 'firebaseInstance');
      // const user = await auth(firebaseInstance).signInWithEmailAndPassword(
      //   'opeyemi@gmail.com',
      //   'opeyemi123',
      // );
      // setIsAuthenticated(user, true);
      // console.log('User account created & signed in!');
    } catch (error) {
      console.log(error);
      // if (error.code === 'auth/email-already-in-use') {
      //   console.log('That email address is already in use!');
      // }

      // if (error.code === 'auth/invalid-email') {
      //   console.log('That email address is invalid!');
      // }
    }
  };

  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </ThemeProvider>
  );
};
export default App;
