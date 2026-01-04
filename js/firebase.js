// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyC_wg1GAixYYTTMwAGBMBQc03qJrrSYMs0",
  authDomain: "dawly-cada8.firebaseapp.com",
  projectId: "dawly-cada8",
};

// initialize مرة واحدة فقط
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Global services
const auth = firebase.auth();
const db = firebase.firestore();
// ❌ مفيش storage
