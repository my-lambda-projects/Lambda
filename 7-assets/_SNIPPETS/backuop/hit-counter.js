const firebaseConfig = {
  apiKey: "AIzaSyDNvZTWK5frqUpF43TLLKcCY-18K3dat7g",
  authDomain: "hit-counter-bef28.firebaseapp.com",
  projectId: "hit-counter-bef28",
  storageBucket: "hit-counter-bef28.appspot.com",
  messagingSenderId: "732467417978",
  appId: "1:732467417978:web:acd0103f6d42a48bdd3cc3"
};
firebase.initializeApp(firebaseConfig);





const hitCounter = document.getElementById("hit-counter");
hitCounter.style.display = "none";





const db = firebase.database().ref( "totalHits" );
db.on( "value", ( snapshot ) => {
  hitCounter.textContent = snapshot.val();
} );


db.transaction(
  (totalHits) => totalHits + 1,
  (error) => {
    if (error) {
      console.log(error);
    } else {
      hitCounter.style.display = "inline-block";
    }
  }
);




// <
