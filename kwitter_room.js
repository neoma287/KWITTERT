
//ADD YOUR /
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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose ; "adding room names"
  });
  localStorage.setItem("room_name" , room_name);
   
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = kwitter.html;
}
function send() {
msg = document.getElementById("msg").value;
firebase.().ref(room_name).push({
  name:user_name
  like:0
})

