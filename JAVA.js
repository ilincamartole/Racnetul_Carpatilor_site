
var toateSectiunile = document.querySelectorAll("section");



var butonColoreazaSectiuni = document.getElementById("buton-coloreaza-sectiuni");



butonColoreazaSectiuni.onclick = function () {
  toateSectiunile.forEach(function (sectiune) {

    var culoareFundal = "#" + Math.floor(Math.random() * 16777215).toString(16);
    var culoareText = "#" + Math.floor(Math.random() * 16777215).toString(16);

 
    sectiune.style.backgroundColor = culoareFundal;
    sectiune.style.color = culoareText;
  });
};



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

let countdownTime = 10;


    const timeRemainingElement = document.getElementById("timeRemaining");
    const timeUpMessage = document.getElementById("timeUpMessage");

 
    function updateCountdown() {
   
      timeRemainingElement.textContent = countdownTime;

      
      if (countdownTime <= 0) {
        timeUpMessage.style.display = "block"; 
        clearInterval(countdownInterval); 
      } else {
        countdownTime--; 
      }
    }

    
    const countdownInterval = setInterval(updateCountdown, 1000);




