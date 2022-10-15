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