import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseAuth = auth();

export const loginRequest = (email, password) => {
  firebaseAuth.signInWithEmailAndPassword(email, password);
};
