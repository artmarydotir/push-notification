// TODO: Replace the following with your app's Firebase project configuration
let firebaseConfig = {
  apiKey: "AIzaSyD6VZAbIheaqo-Dc9R24Z9w6-zvcq4XSFo",
  authDomain: "studentmangment-5135a.firebaseapp.com",
  projectId: "studentmangment-5135a",
  storageBucket: "studentmangment-5135a.appspot.com",
  messagingSenderId: "245414137241",
  appId: "1:245414137241:web:0e1b855ffe6cd5a3b31708",
  measurementId: "G-X1MW3FBFNV",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// second promis is for token
function initmsg() {
  messaging
    .requestPermission()
    .then(() => {
      console.log("permition");
      return messaging.getToken();
    })
    .then((token) => {
      console.log("token");
      document.getElementById("token").innerHTML = token;
    })
    .then((reason) => {
      console.log("reason");
    });
}

messaging.onMessage((payload) => {
  console.log("payload");
});

messaging.onTokenRefresh(() => {
  messaging
    .getToken()
    .then((newToken) => {
      console.log("newToken");
    })
    .catch((ee) => {
      console.log("ee");
    });
});

initmsg();
