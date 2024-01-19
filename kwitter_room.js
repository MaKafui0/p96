const firebaseConfig = {
    apiKey: "AIzaSyAUbtcjT69h0mFF3SFXDn0dctiNeewp8LI",
    authDomain: "c93-92.firebaseapp.com",
    projectId: "c93-92",
    storageBucket: "c93-92.appspot.com",
    messagingSenderId: "512114545132",
    appId: "1:512114545132:web:a8e00897616243c05770c9",
    measurementId: "G-MEKSTY7R3E"
  };
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData()
 {firebase.database().ref("/").on('value',
function(snapshot)
 {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot)
 {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
document.getElementById("output");
//End code
});});}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value = "";
      
}