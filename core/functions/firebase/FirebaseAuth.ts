import { getAuth, onAuthStateChanged } from "firebase/auth"
import { firebaseAuthInit } from "./FirebaseInit"
import firebaseAuth from 'firebase/compat/app'

export async function firebaseAuthApp () {
    firebaseAuthInit()
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        signInOptions: [
            firebaseAuth.auth.EmailAuthProvider.PROVIDER_ID,
            firebaseAuth.auth.GoogleAuthProvider.PROVIDER_ID,
            firebaseAuth.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        tosUrl: 'https://policy.xyn.bio/Code.html',
        privacyPolicyUrl: 'https://policy.xyn.bio/Privacy.html'
    }
    return uiConfig
}

export async function getAuthState () {
    firebaseAuthInit()
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User is signed in')
        } else {
            console.log('User is signed out')
        }
    })
}