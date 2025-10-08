const butonTrimite = document.getElementById("trimiteComentariul");
const textareaComentariu = document.getElementById("comentariuText");
const listaComentarii = document.getElementById("listaComentarii");
const elementOra = document.getElementById("oraCurenta");

document.addEventListener("DOMContentLoaded", loadComments);


function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comentarii")) || [];
  listaComentarii.innerHTML = ""; 
  comments.forEach((comment) => {
    const p = document.createElement("p");
    p.textContent = comment;
    listaComentarii.appendChild(p);
  });
}


butonTrimite.addEventListener("click", function () {
  const comentariu = textareaComentariu.value.trim();

 
  if (comentariu !== "") {
  
    const comments = JSON.parse(localStorage.getItem("comentarii")) || [];

    
    comments.push(comentariu);

    localStorage.setItem("comentarii", JSON.stringify(comments));


    const p = document.createElement("p");
    p.textContent = comentariu;
    listaComentarii.appendChild(p);

    
    textareaComentariu.value = "";
  } else {
    alert("Te rog să scrii un comentariu înainte de a-l trimite.");
  }
});

function actualizeazaOra() {
    const acum = new Date();
    const ora = acum.getHours().toString().padStart(2, "0");
    const minute = acum.getMinutes().toString().padStart(2, "0");
    const secunde = acum.getSeconds().toString().padStart(2, "0");
    elementOra.textContent = `Ora curentă: ${ora}:${minute}:${secunde}`;
  }

setInterval(actualizeazaOra, 1000);
  


function valideazaComentariu(text) {
    const regex = /^[a-zA-Z0-9 .,!?-]{1,30}$/; 
    return regex.test(text);
  }
  
 
  function afiseazaEroare(mesaj) {
    let mesajEroare = document.getElementById("mesajEroare");
    if (!mesajEroare) {
      mesajEroare = document.createElement("p");
      mesajEroare.id = "mesajEroare";
      mesajEroare.style.color = "red";
      mesajEroare.style.fontWeight = "bold";
      document.getElementById("comentarii").appendChild(mesajEroare);
    }
    mesajEroare.textContent = mesaj;
  }
  
 
  butonTrimite.addEventListener("click", function () {
    const comentariu = textareaComentariu.value.trim();
  
    
    if (!valideazaComentariu(comentariu)) {
      afiseazaEroare(
        "Comentariul trebuie să conțină între 1 și 200 de caractere și să nu includă simboluri interzise!"
      );
      return; 
    }
  
   
    const mesajEroare = document.getElementById("mesajEroare");
    if (mesajEroare) {
      mesajEroare.remove();
    }
  
    
    const comments = JSON.parse(localStorage.getItem("comentarii")) || [];
    comments.push(comentariu);
    localStorage.setItem("comentarii", JSON.stringify(comments));
  
    const p = document.createElement("p");
    p.textContent = comentariu;
    listaComentarii.appendChild(p);
  
    textareaComentariu.value = ""; 
  });


document.addEventListener("DOMContentLoaded", function () {
   
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      
      document.getElementById("welcomeName").textContent = user.username;
      document.getElementById("login").style.display = "none"; 
      document.getElementById("welcome").style.display = "block"; 
    }
  });
  

document.addEventListener("DOMContentLoaded", function () {
   
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {

      document.getElementById("welcomeName").textContent = user.username;
      document.getElementById("login").style.display = "none"; 
      document.getElementById("welcome").style.display = "block"; 
    }
  });
  
 
  document.getElementById("formLogin").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  

    if (username && password) {

      localStorage.setItem("user", JSON.stringify({ username: username }));
  
      
      document.getElementById("welcomeName").textContent = username;
      document.getElementById("login").style.display = "none"; 
      document.getElementById("welcome").style.display = "block"; 
  
      
      document.getElementById("mesajLogin").style.display = "none"; 
    } else {
      
      document.getElementById("mesajLogin").style.display = "block";  
      document.getElementById("mesajLogin").textContent = "Te rugăm să completezi toate câmpurile!";
    }
  });
  

  document.getElementById("logoutButton")?.addEventListener("click", function () {
   
    localStorage.removeItem("user");
  
    
    document.getElementById("login").style.display = "block"; 
    document.getElementById("welcome").style.display = "none"; 
  });
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  

  function deseneazaEmoji() {

    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2);  
    ctx.fillStyle = "#FFCC00"; 
    ctx.fill();
    ctx.stroke();
  
  
    ctx.beginPath();
    ctx.arc(110, 130, 15, 0, Math.PI * 2);  
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
  
   
    ctx.beginPath();
    ctx.arc(110, 130, 7, 0, Math.PI * 2);  
    ctx.fillStyle = "black";
    ctx.fill();
 
    ctx.beginPath();
    ctx.arc(190, 130, 15, 0, Math.PI * 2);  
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
  
 
    ctx.beginPath();
    ctx.arc(190, 130, 15, 0, Math.PI * 2);  
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
  

    ctx.beginPath();
    ctx.arc(190, 130, 7, 0, Math.PI * 2);  
    ctx.fillStyle = "black";
    ctx.fill();
  
    ctx.beginPath();
    ctx.arc(190, 120, 15, 0, Math.PI);  
    ctx.fillStyle = "#FFCC00";  
    ctx.fill();
    ctx.stroke();
  
   
    ctx.beginPath();
    ctx.arc(150, 170, 50, 0, Math.PI);  
    ctx.stroke();
  }
  
 
  deseneazaEmoji();
  