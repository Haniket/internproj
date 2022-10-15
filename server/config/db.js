const mongoose = require('mongoose');

module.exports = async () => {
  const connection = 'mongodb+srv://haniketIntern:Hanik^09481@cluster0.xdg2bin.mongodb.net/imageurls?retryWrites=true&w=majority';
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(connection, connectionParams);
    console.log('connection established');
  } catch (err) {
    console.log('could not connect to db because', err);
  }
};


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBKkqtasBn6eZ46uetG1H_S23mDDOl7Wjg",
//   authDomain: "intern-9d5b7.firebaseapp.com",
//   projectId: "intern-9d5b7",
//   storageBucket: "intern-9d5b7.appspot.com",
//   messagingSenderId: "44562670029",
//   appId: "1:44562670029:web:345d8bffdc902a0bf26484",
//   measurementId: "G-ZX7DGKV9F0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if false;
//     }
//   }
// }