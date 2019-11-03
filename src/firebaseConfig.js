import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDqx7ofE4Kh5M9o8Pp51dlZavUhzF8TGqQ",
  authDomain: "ottava-52869.firebaseapp.com",
  databaseURL: "https://ottava-52869.firebaseio.com",
  projectId: "ottava-52869",
  storageBucket: "ottava-52869.appspot.com",
  messagingSenderId: "790492355915",
  appId: "1:790492355915:web:68b50b2c0ebc5bdf225cce",
  measurementId: "G-F04PL3ZHN9"
}
firebase.initializeApp(config)

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser


const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}