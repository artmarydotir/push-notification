importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "",
  authDomain: "studentmangment-5135a.firebaseapp.com",
  projectId: "studentmangment-5135a",
  storageBucket: "studentmangment-5135a.appspot.com",
  messagingSenderId: "245414137241",
  appId: "1:245414137241:web:0e1b855ffe6cd5a3b31708",
  measurementId: "G-X1MW3FBFNV",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log(payload);
//   const notification = JSON.parse(payload);
//   const notificationOption = {
//     body: notification.body,
//     icon: notification.icon,
//   };
//   return self.registration.showNotification(
//     payload.notification.title,
//     notificationOption
//   );
// });

// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "./icon.png",
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // check ga here todo
  // Customize notification here
  // const notificationTitle = "Background Message Title";
  // const notificationOptions = {
  //   title: "FCM Message",
  //   body: "Background Message body.",
  //   icon: "http://127.0.0.1:8080/icon.png",
  // };

  return self.registration.showNotification(title, options);
});
