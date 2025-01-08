import { Environment } from './environment';

export const environment: Environment = {
  production: true,
  firebaseConfig: {
    apiKey:
      process.env['FIREBASE_API_KEY'] ||
      'AIzaSyCMOmeS1zX6qhqIcJ5cFIVQoVV_SxUD7Lk',
    authDomain:
      process.env['FIREBASE_AUTH_DOMAIN'] ||
      'angulartodos-89870.firebaseapp.com',
    projectId: process.env['FIREBASE_PROJECT_ID'] || 'angulartodos-89870',
    storageBucket:
      process.env['FIREBASE_STORAGE_BUCKET'] ||
      'angulartodos-89870.firebasestorage.app',
    messagingSenderId:
      process.env['FIREBASE_MESSAGING_SENDER_ID'] ||
      '1:96884917987:web:33be1594ef97796d11a7d6',
    appId: process.env['FIREBASE_APP_ID'] || '1:968847d6',
    measurementId: process.env['FIREBASE_MEASUREMENT_ID'] || 'G-CSR0CHLT6L',
    databaseURL:
      process.env['FIREBASE_DATABASE_URL'] ||
      'https://angulartodos-89870-default-rtdb.europe-west1.firebasedatabase.app/',
  },
};
