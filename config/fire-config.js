import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCYOPWOIkNtuZm5CFRNiXiErQAuld5KV7o',
	authDomain: 'blog-9c498.firebaseapp.com',
	projectId: 'blog-9c498',
	storageBucket: 'blog-9c498.appspot.com',
	messagingSenderId: '68309631143',
	appId: '1:68309631143:web:62a747b959f4deefc11b82'
};

try {
	firebase.initializeApp(firebaseConfig);
} catch (err) {
	if (!/already exists/.test(err.message)) {
		console.error('Firebase initialization error', err.stack);
	}
}

const fire = firebase;
export default fire;
