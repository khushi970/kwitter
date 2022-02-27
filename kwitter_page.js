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
room_name=localStorage.getItem("room_name");
function send()
{
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
   name:user_name, 
     message: msg,
       like:0
  });
  document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message= message_data['message'];
         like= message_data['like'];
        name_with_tag= "<h4>" + name + "</h4> <img class='user_tick' src='tick.png'>";
        message_with_tag = "<h3 class='message_h3'>" + message + "</h3>" ;
        like_button = "<button class='btn-btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updatelike(this.id)'>";
        span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'> like: " + like + "</span> </button> <hr>";
        row= name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML=row;

      } });  }); }
getData();
function updatelike(message_id){
  console.log("clicked on like button - " + message_id); 
  button_id = message_id; likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1; console.log(updated_likes);
   
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


