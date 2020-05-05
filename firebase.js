//configuração anonima para ocultar o firebase do console do navegador, podendo utilizar apenas $
$(document).ready(function(){

  import * as firebase from "firebase/app";
  // Serviçis do Firebase necessários
  import "firebase/auth";
  import "firebase/firestore";

  const firebaseConfig = {                                    //colocar const ou var
    apiKey: "AIzaSyAKr6jHnQuOqTrt06v_CCFi8Jk2uNln6ws",
    authDomain: "docs-850b3.firebaseapp.com",
    databaseURL: "https://docs-850b3.firebaseio.com",
    projectId: "docs-850b3",
    storageBucket: "docs-850b3.appspot.com",
    messagingSenderId: "859245906188",
    appId: "1:859245906188:web:608f3e79e2c8307f1f2129",
    measurementId: "G-PF17VS1M2Z"
    };
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Testando documento no banco de dados
  const texto = document.getElementById('texto');           // Elemento Texto criado no html Linha 90
  const dbRef = firebase.database().ref().child('texto');   // Criando referência no BD do Firebase
  dbRef.on('value', snap => texto.innerText = snap.val());  // Sincronizar dos dados
})();