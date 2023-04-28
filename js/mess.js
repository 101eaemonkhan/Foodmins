//import firebase from 'firebase/app';
//import 'firebase/database';

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
const contactFormDB = firebase.database().ref("contactForm");

//Any one can connect this contact us form to database
function submitForm(event) {
    event.preventDefault();
    alert('Your Message Sent Successfully');
    //console log for check effectively it's work or not
    console.log("User");
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;
    console.log(name, number, email, msg);
    // prevent form submission
    // code to handle form submission goes here
}
const form = document.getElementById('myForm');
form.addEventListener('submit', submitForm);



   


//it will psuh data on realtime database container


const saveMessage = (name, email, msg) => {
    var newContactForm = contactFormBD.push();
  
    newContactForm.set({
      name: name,
      emailid: email,
      message: msg,
    });
  };
  


