// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBwbVJTpONu8XgG8m4FS-a3dQKMPyAtBMY',
	authDomain: 'my-blog-2a65e.firebaseapp.com',
	projectId: 'my-blog-2a65e',
	storageBucket: 'my-blog-2a65e.appspot.com',
	messagingSenderId: '217843784221',
	appId: '1:217843784221:web:1366b942112507c3e1c4f4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
