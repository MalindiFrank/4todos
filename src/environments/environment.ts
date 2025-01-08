export interface FirebaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string,
    databaseURL: string,
};

export interface Environment {
  production: boolean,
  firebaseConfig: FirebaseConfig
}

export const environment: Environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyCMOmeS1zX6qhqIcJ5cFIVQoVV_SxUD7Lk",
  authDomain: "angulartodos-89870.firebaseapp.com",
  projectId: "angulartodos-89870",
  storageBucket: "angulartodos-89870.firebasestorage.app",
  messagingSenderId: "96884917987",
  appId: "1:96884917987:web:33be1594ef97796d11a7d6",
  measurementId: "G-CSR0CHLT6L",
  databaseURL: "https://angulartodos-89870-default-rtdb.europe-west1.firebasedatabase.app/",
  },
};
