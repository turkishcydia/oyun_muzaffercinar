// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7FpY1i-0yrMFM3PmeFlJGP_ljrPfArDU",
    authDomain: "betaweb-7e3fb.firebaseapp.com",
    projectId: "betaweb-7e3fb",
    storageBucket: "betaweb-7e3fb.appspot.com",
    messagingSenderId: "453663035570",
    appId: "1:453663035570:web:491c4eae35b090e472b9ab",
    measurementId: "G-30MMKLXM52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
