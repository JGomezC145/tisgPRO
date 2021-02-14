// Firebase Config
var uid;
var firebaseConfig = {
  apiKey: "AIzaSyB8BGlwxVrF-sS3cAKvCqupMbbsVJ2vjw8",
  authDomain: "gomezchava-5b.firebaseapp.com",
  databaseURL: "https://gomezchava-5b-default-rtdb.firebaseio.com/",
  projectId: "gomezchava-5b",
  storageBucket: "gomezchava-5b.appspot.com",
  messagingSenderId: "593431228560",
  appId: "1:593431228560:web:be55ab60866a0f8045a815"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection");

//variables
const db = firebase.firestore();
const storage = firebase.storage();
var storageRef = storage.ref();

//Create ProductPost
function createPost(title, time, descr, imgsource, id, precio) {

  let div = document.createElement("div");
  div.setAttribute("class", "card");
  let yikes = document.createElement("div");
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let cardbody = document.createElement("div");
  let idcontainer = document.createElement("p");
  idcontainer.setAttribute("style", "display: none")
  /* card.setAttribute("class", "card") */
  cardbody.setAttribute("class", "face2")
  yikes.setAttribute("style", "display: flex; justify-content: right; color: rgb(39, 98, 224);");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let img = document.createElement("img");
  img.setAttribute("class", "face1")
  let likescounter = document.createElement("p");
  let heart = document.createElement("i")
  heart.setAttribute("class", "bx bxs-heart")
  heart.setAttribute("style", "margin-top: 5px; margin-right: 3px;")

  img.setAttribute("class", "card-img-top");
  h2.setAttribute("class", "card-title");
  p.setAttribute("class", "card-text");

  img.src = imgsource;
  h2.textContent = title;
  p.textContent = descr;
  idcontainer.textContent = id;
  likescounter.textContent = precio;


  yikes.appendChild(heart);
  yikes.appendChild(likescounter);

  cardbody.appendChild(h2);
  cardbody.appendChild(p);
  cardbody.appendChild(yikes);

  card.appendChild(img);
  card.appendChild(cardbody)

  //div.appendChild(card);

  // div.appendChild(img);
  // div.appendChild(h2);
  // div.appendChild(small);
  // div.appendChild(p);
  // div.appendChild(yikes);

  postCollection.appendChild(card);
}

// Get Posts
function getPosts() {
  db.collection("productos")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().productName,
          docs.data().createdAt,
          docs.data().productDesc,
          docs.data().imgSource,
          docs.id,
          docs.data().precio
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();