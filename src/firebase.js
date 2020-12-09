import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyBljQb6Sa5zLxM_as5k-flnLdFOdvCdGnM",
    authDomain: "admin-labb.firebaseapp.com",
    projectId: "admin-labb",
    storageBucket: "admin-labb.appspot.com",
    messagingSenderId: "692143061291",
    appId: "1:692143061291:web:3cf8feba928195df8cad6e",
    measurementId: "G-LHD49YFHT4"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

// utils
const db = firebaseApp.firestore()
// const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
  db,
//   auth,
  usersCollection
}