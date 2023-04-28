// import firebase from 'firebase/app';
// import 'firebase/database';

//firebase link https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyDtFp4t1xcL5cLTHj3xw6tMMSspB1le0sE",
  authDomain: "foodmins-17a94.firebaseapp.com",
  databaseURL: "https://foodmins-17a94-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodmins-17a94",
  storageBucket: "foodmins-17a94.appspot.com",
  messagingSenderId: "36445179297",
  appId: "1:36445179297:web:cb32e305541f8b2f4a8fe0",
  measurementId: "G-W8RQQCSMDM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database...............



// register form for backend 

function submitResistation(event) {
    event.preventDefault();
      // Get user input values
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwords = document.getElementById('passwords').value;
      // Validate password fields
  if (password !== passwords) {
    alert("Passwords do not match");
    return;
  }
     alert("You're succcessfully register")

     //redirecting to the login page after registration
     window.location.href = "login.html";
    console.log(name, number, email, password);
    
    // prevent form submission
    // code to handle form submission goes here
    const user = {
        name: name,
        number: number,
        email: email,
        password: password,
        passwords: passwords
    };

    const database = firebase.database();
    database.ref('users').push(user);

    alert('User added to Firebase!');
}
const form = document.getElementById('myForm');
form.addEventListener('submit', submitResistation);



  // Send email verification
 // userCredential.user.sendEmailVerification();



