// login.js
import { 
  loginWithGoogle, loginWithGithub, loginWithFacebook, 
  loginAnonymous
} from "./auth.js";
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// DOM elements (hanya tombol provider)
const googleBtn = document.getElementById('googleBtn');
const githubBtn = document.getElementById('githubBtn');
const facebookBtn = document.getElementById('facebookBtn');
const anonymousBtn = document.getElementById('anonymousBtn');

// Redirect setelah login sukses
function onLoginSuccess(user) {
  console.log("Login berhasil:", user?.uid);
  window.location.href = "index.html";
}

// Event listener untuk masing-masing tombol
googleBtn.onclick = () => loginWithGoogle().then(onLoginSuccess).catch(alert);
githubBtn.onclick = () => loginWithGithub().then(onLoginSuccess).catch(alert);
facebookBtn.onclick = () => loginWithFacebook().then(onLoginSuccess).catch(alert);
anonymousBtn.onclick = () => loginAnonymous().then(onLoginSuccess).catch(alert);

// Jika sudah login sebelumnya, langsung redirect ke chat
onAuthStateChanged(auth, (user) => {
  if (user) window.location.href = "index.html";
});
