export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
  databaseURL: string;
}

export interface Environment {
  production: boolean;
  firebaseConfig: FirebaseConfig;
}

export const environment: Environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBlTQbeHzlZDmKrZyoFRDWgAK3LUlhW2Vw',
    authDomain: 'todos-a65a0.firebaseapp.com',
    projectId: 'todos-a65a0',
    storageBucket: 'todos-a65a0.firebasestorage.app',
    messagingSenderId: '267630383095',
    appId: '1:267630383095:web:ac6330dc8865a025b1a8f2',
    measurementId: 'G-BD8KYC371N',
    databaseURL:
      ' https://todos-a65a0-default-rtdb.asia-southeast1.firebasedatabase.app/',
  },
};
