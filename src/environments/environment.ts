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
    apiKey: process.env['FIREBASE_API_KEY'] || 'V_SxUD7Lk', 
    authDomain: process.env['FIREBASE_AUTH_DOMAIN'] || '0.firebaseapp.com',
    projectId: process.env['FIREBASE_PROJECT_ID'] || '-870',
    storageBucket: process.env['FIREBASE_STORAGE_BUCKET'] || 'age.app',
    messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'] || '9687',
    appId: process.env['FIREBASE_APP_ID'] || '1:968847d6',
    measurementId: process.env['FIREBASE_MEASUREMENT_ID'] || 'GT6L',
    databaseURL: process.env['FIREBASE_DATABASE_URL'] || '.europe-wtabase.app/',
  },
};
