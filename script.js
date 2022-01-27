let front = 0;
let back = 0;
let coin = document.querySelector("#coin");
let flipBtn = document.querySelector("#flip-coin");
let restartBtn = document.querySelector("#restart-btn");

flipBtn.addEventListener("click", ()=>{
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if(i) {
    setTimeout(function(){
      coin.style.animation = "spin-front 3s ease forwards";
    },100);
    front++;
  } 
  else {
    setTimeout(function(){
      coin.style.animation = "spin-back 3s ease forwards";
    },100);
    back++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});

function updateStats(){
  document.querySelector("#front-count").textContent = `Front: ${front}`;
  document.querySelector("#back-count").textContent = `Back: ${back}`;
}

function disableButton(){
  flipBtn.disabled = true;
  setTimeout(function(){
    flipBtn.disabled = false;
  }, 3000);
}

restartBtn.addEventListener("click",()=>{
  coin.style.animation = "none";
  front = 0;
  back = 0;
  updateStats();
  flipBtn.disabled = false;
});