var firebaseConfig = {
    apiKey: "AIzaSyB8BGlwxVrF-sS3cAKvCqupMbbsVJ2vjw8",
    authDomain: "gomezchava-5b.firebaseapp.com",
    databaseURL: "https://gomezchava-5b-default-rtdb.firebaseio.com/",
    projectId: "gomezchava-5b",
    storageBucket: "gomezchava-5b.appspot.com",
    messagingSenderId: "593431228560",
    appId: "1:593431228560:web:be55ab60866a0f8045a815"
  
};

firebase.initializeApp(firebaseConfig);

//variables
const db = firebase.firestore();
const storage = firebase.storage();
var storageRef = storage.ref();

function cambio(){
    var ims = document.getElementById('imgs').value;
    document.getElementById('showimg').src = ims;
}

//content
function cargar() {
    let postTitle = document.getElementById('name').value;
    let postContent = document.getElementById('description').value;
    let imgSource = document.getElementById('imgs').value;
    let postDate = document.getElementById('price').value;
    {}
    db.collection("productos")
        .doc()
        .set({
          cargado: 'Desde UPLOADER.XS by JeremyGomez',
          createdAt: new Date(),
          productName: postTitle,
          productDesc: postContent,
          imgSource: imgSource,
          precio: postDate
        });
      alert('Posted');
      var setas = setTimeout(clearall(), 3000);
    
}

function clearall() {
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('imgs').value = '';
    document.getElementById('price').value = '';
}