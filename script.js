var countDate = new Date("March 22, 2026 00:00:00").getTime();

setInterval(function() {
  var now = new Date().getTime();
  var gap = countDate - now;

  if (gap < 0) {
    document.getElementById("countdown").innerHTML =
      "🎉 HAPPY BIRTHDAY MY LOVE 🎂❤️";
    return;
  }

  var d = Math.floor(gap / (1000*60*60*24));
  var h = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
  var m = Math.floor((gap%(1000*60*60))/(1000*60));
  var s = Math.floor((gap%(1000*60))/1000);

  document.getElementById("countdown").innerHTML =
    d+"d "+h+"h "+m+"m "+s+"s ❤️";
},1000);

function showFireworks(){
 const canvas=document.getElementById("fireworks");
 const ctx=canvas.getContext("2d");
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;

 for(let i=0;i<150;i++){
   ctx.beginPath();
   ctx.arc(Math.random()*canvas.width,
           Math.random()*canvas.height,
           3,0,Math.PI*2);
   ctx.fillStyle="white";
   ctx.fill();
 }

 setTimeout(()=>ctx.clearRect(0,0,canvas.width,canvas.height),1500);
}

function confetti(){
 for(let i=0;i<200;i++){
  const c=document.createElement("div");
  c.style.position="fixed";
  c.style.left=Math.random()*100+"vw";
  c.style.top=Math.random()*100+"vh";
  c.style.width="8px";
  c.style.height="8px";
  c.style.background="white";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),2000);
 }
}

const reasons = [
"Your smile brightens my darkest days ❤️",
"You make me feel safe and loved",
"You understand me without words",
"You are my peace",
"Life feels beautiful with you",
"Every moment with you is magical",
"You make ordinary moments feel special",
"I feel at home when I am with you",
"Your voice is my favorite sound",
"You support me even when I doubt myself",
"You make me laugh when I need it the most",
"You are the calm in my chaos",
"You love me in ways I never imagined",
"You are my strength and my comfort",
"My heart feels happiest when you are near",
"You make my world brighter just by existing",
"You are my safest place",
"You turn my bad days into better ones",
"I love the way you care for me",
"You are my today and all my tomorrows ❤️"
];

function showReason(){
 const r=reasons[Math.floor(Math.random()*reasons.length)];
 document.getElementById("reason").innerHTML=r;
}

function openSecret(){
 var pass=prompt("Enter the secret word ❤️");
 if(pass==="love"){
   window.location="secret.html";
 }else{
   alert("Wrong password 😜");
 }
}

setInterval(()=>{
 const heart=document.createElement("div");
 heart.innerHTML="❤️";
 heart.style.position="fixed";
 heart.style.left=Math.random()*100+"vw";
 heart.style.bottom="0";
 heart.style.fontSize="20px";
 heart.style.animation="floatUp 4s linear";
 document.body.appendChild(heart);
 setTimeout(()=>heart.remove(),4000);
},500);

let slideIndex=0;
showSlides();
function showSlides(){
 let slides=document.getElementsByClassName("slides");
 for(let i=0;i<slides.length;i++){
   slides[i].style.display="none";
 }
 slideIndex++;
 if(slideIndex>slides.length){slideIndex=1;}
 slides[slideIndex-1].style.display="block";
 setTimeout(showSlides,2500);
}