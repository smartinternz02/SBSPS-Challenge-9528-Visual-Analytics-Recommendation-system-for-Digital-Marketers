	//Validtion Code For Inputs

  var email = document.forms['form']['email'];
  var password = document.forms['form']['password'];
  
  var email_error = document.getElementById('email_error');
  var pass_error = document.getElementById('pass_error');
  
  email.addEventListener('textInput', email_Verify);
  password.addEventListener('textInput', pass_Verify);
  
  function validated(){
    if (email.value.length < 9) {
      email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      return false;
    }
    if (password.value.length < 6) {
      password.style.border = "1px solid red";
      pass_error.style.display = "block";
      password.focus();
      return false;
    }
  
  }
  function email_Verify(){
    if (email.value.length >= 8) {
      email.style.border = "1px solid silver";
      email_error.style.display = "none";
      return true;
    }
  }
  function pass_Verify(){
    if (password.value.length >= 5) {
      password.style.border = "1px solid silver";
      pass_error.style.display = "none";
      return true;
    }
  }  
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyB3EW6xUlHM-O6aOx8Mif8buhdm7BZJId4",
    authDomain: "fire-auth-8f968.firebaseapp.com",
    projectId: "fire-auth-8f968",
    storageBucket: "fire-auth-8f968.appspot.com",
    messagingSenderId: "341305201859",
    appId: "1:341305201859:web:9be2bb2c6a54183e64be76"
        });
       const db = firebaseApp.firestore();
       const auth = firebaseApp.auth();
    
    const signUp = () =>{
        const email=document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
      
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    }
