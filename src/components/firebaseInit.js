
import Firebase from 'firebase'
//import 'firebase.firestore' no tengo firestore
import firebaseConfig from './firebaseConfig'
//const firebaseApp = Firebase.initializeApp(firebaseConfig)
export default Firebase.initializeApp(firebaseConfig)
