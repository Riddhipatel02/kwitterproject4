user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

var firebaseConfig = {
      apiKey: "AIzaSyCgxhlsQGzRJAU045aiuLvGkj2Du8k6Yac",
      authDomain: "kwitter-44b5e.firebaseapp.com",
      databaseURL: "https://kwitter-44b5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-44b5e",
      storageBucket: "kwitter-44b5e.appspot.com",
      messagingSenderId: "898212606038",
      appId: "1:898212606038:web:226064c160f75a3c720bf7"
    };

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
