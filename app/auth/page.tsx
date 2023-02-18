import { firebaseAuthApp } from "@/core/functions/firebase/FirebaseAuth"
import FirebaseAuthLay from "@/core/layouts/firebase/FirebaseAuth"

const AuthCompoment = async () => {
    const uiConfig = await firebaseAuthApp()
    return <FirebaseAuthLay uiConfig={uiConfig} />
}

export default AuthCompoment