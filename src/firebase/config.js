import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAnP5WmeSdov4ij6IBEzbtNCKYgNVppbc0",
	authDomain: "crespo-tiendas-servicios.firebaseapp.com",
	projectId: "crespo-tiendas-servicios",
	storageBucket: "crespo-tiendas-servicios.appspot.com",
	messagingSenderId: "973486025624",
	appId: "1:973486025624:web:a1d070eeef68d46ebf59ed"
}

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

app ? console.log("conectado") : console.log("error");