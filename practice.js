
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCdvzHlyg54LQWMwOwdVAqFKGzBqdM3zTg",
    authDomain: "kwitter-7f751.firebaseapp.com",
    databaseURL: "https://kwitter-7f751-default-rtdb.firebaseio.com",
    projectId: "kwitter-7f751",
    storageBucket: "kwitter-7f751.appspot.com",
    messagingSenderId: "33281454055",
    appId: "1:33281454055:web:8bc816d49bafc0b7979742"
  };
  firebase.initializeApp(firebaseConfig); 
  user_name = localStorage.getItem("user_name");

  function addUser()
   {
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
     }