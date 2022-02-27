const firebaseConfig = {
      apiKey: "AIzaSyBurLxXv8_FKXlEkNM92mE0t_ARbbEB1FM",
      authDomain: "kwitter-a9c4a.firebaseapp.com",
      databaseURL: "https://kwitter-a9c4a-default-rtdb.firebaseio.com",
      projectId: "kwitter-a9c4a",
      storageBucket: "kwitter-a9c4a.appspot.com",
      messagingSenderId: "243839279063",
      appId: "1:243839279063:web:27e7d55e1a5a6034ebf592"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addroom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
purpose:"adding roomname"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name - " + Room_names);
row="<div class='room_name' id="+ Room_names+ "onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML=row;

      });});}
getData();
function redirectToRoomName(name)
{
      console.log (name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
      
}
 function logout()
 {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

 }