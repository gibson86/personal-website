const firebaseConfig = {
  apiKey: "AIzaSyAWGjoo54Nik9scTSZ5l3_hy0c5qb1BNO0",
  authDomain: "portfolio-feedback-de026.firebaseapp.com",
  databaseURL: "https://portfolio-feedback-de026-default-rtdb.firebaseio.com",
  projectId: "portfolio-feedback-de026",
  storageBucket: "portfolio-feedback-de026.firebasestorage.app",
  messagingSenderId: "562793364644",
  appId: "1:562793364644:web:50ea7d289fdca35acbba31",
  measurementId: "G-QV3BLFLBLQ"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactformDB = firebase.database().ref("contactform");
document.getElementById(`contatform`).addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault(); 

  var name = getElementVal(`name`);
  var email = getElementVal(`email`);
  var subject = getElementVal(`subject`);
  var message = getElementVal(`message`);

  console.log(name, email, subject, message);

}

const getElementVal = (id) =>{
  return document.getElementById(id).value;
};