// <script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Nf9tlf5tzQ1OtaH2aoob4J7fGJp8qF8",
  authDomain: "sigmaform-1d6dd.firebaseapp.com",
  databaseURL: "https://sigmaform-1d6dd-default-rtdb.firebaseio.com",
  projectId: "sigmaform-1d6dd",
  storageBucket: "sigmaform-1d6dd.appspot.com",
  messagingSenderId: "775603124471",
  appId: "1:775603124471:web:8e785dc3f6ec30f8a13bf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//reference your db

var sigmaformdb = firebase.database().ref("sigmaform");
document.getElementById("sigmaform").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  var name = getElementval("name");
  var email = getElementval("email");
  var subject = getElementval("subject");
  var phone = getElementval("phone");
  var msg = getElementval("msg");

  saveMessages(name, email, subject, phone, msg);

  const saveMessages = (name, email, subject, phone, msg) => {
    var newContactForm = sigmaformdb.push();

    newContactForm.set({
      name: name,
      email: email,
      subject: subject,
      phone: phone,
      msg: msg,
    });
  };
  const getElementval = (id) => {
    return document.getElementById(id).value;
  };
}
