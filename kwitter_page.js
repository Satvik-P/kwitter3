var firebaseConfig = {
    apiKey: "AIzaSyCkJd0tiR66R2ZbsRYkESa4mPrnNTN6Ss8",
    authDomain: "kwitter2-97db2.firebaseapp.com",
    databaseURL: "https://kwitter2-97db2-default-rtdb.firebaseio.com",
    projectId: "kwitter2-97db2",
    storageBucket: "kwitter2-97db2.appspot.com",
    messagingSenderId: "867984211380",
    appId: "1:867984211380:web:9e5403ae0a6810235f86e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("kwitter.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
