import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyC7Kdo89cEgkMzcO0-iaEo_9E6hsbpura8',
	authDomain: 'todoslist-ab018.firebaseapp.com',
	projectId: 'todoslist-ab018',
	storageBucket: 'todoslist-ab018.appspot.com',
	messagingSenderId: '446089241344',
	appId: '1:446089241344:web:05f6fba575ec9ce03889e5',
	databaseURL: 'https://todoslist-ab018-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
