import firebase from 'firebase/app';
import "firebase/database"
import "firebase/storage"
require('firebase/storage');
require('firebase/auth');

// firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
export const storage = firebase.storage().ref();
export type IUser = firebase.User;