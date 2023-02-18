import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseEnv = process.env.FIREBASE_CONFIG??'{"apiKey":"","authDomain":"","databaseURL":"","projectId":"","storageBucket":"","messagingSenderId":"","appId":""}';

const firebaseCfgJson = JSON.parse(firebaseEnv);

const firebaseConfig = {
    apiKey: firebaseCfgJson.apiKey,
    authDomain: firebaseCfgJson.authDomain,
    projectId: firebaseCfgJson.projectId,
    storageBucket: firebaseCfgJson.storageBucket,
    messagingSenderId: firebaseCfgJson.messagingSenderId,
    appId: firebaseCfgJson.appId
};

export function firebaseAuthInit () {
    const app = initializeApp(firebaseConfig);
    return getAuth(app)
}