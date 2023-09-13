const firebaseConfig = {
    apiKey: "AIzaSyCIhMdKKvkcPs-t6XzlItpdvrkOQS0DzBI",
    authDomain: "appongdda.firebaseapp.com",
    projectId: "appongdda",
    storageBucket: "appongdda.appspot.com",
    messagingSenderId: "859610724229",
    appId: "1:859610724229:web:9644be8b7349bd550876ec"
  };

  firebase.initializeApp(firebaseConfig);

 

  const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {

 const email = emailField.value;
 const password = passwordField.value;
 
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 
    // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});