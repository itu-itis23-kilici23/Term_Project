document.addEventListener('DOMContentLoaded', () => {
  const startbutton = document.getElementById("start-button")
  const restartbutton = document.getElementById("restart-button")
  const score = document.getElementById("score")
  const cards = document.getElementById("cards")
  var counter = 1; 
  var mixedorder = []
  initialDisplayCards()
  function initialDisplayCards(){
    var mixedorder = [1,2,3,4,5]
    cards.innerHTML = "";
    for (let i=0; i<5; i++) {
      let divCard = document.createElement("div");
      divCard.classList.add("card");
      divCard.style.backgroundImage = `url('letters/${mixedorder[i]}.svg')`; 
      cards.appendChild(divCard);
    }
  }
  function gamestarter (){
    counter=1;
    score.innerHTML = 0
    mixedorder = mixorder ();
    displayCards(mixedorder);
  }
  function mixorder() {
    let cardorder = [1, 2, 3, 4, 5];
  
    for (let i = cardorder.length - 1; i > 0; i--) {
      const q = Math.floor(Math.random() * (i + 1));
      
      const temp = cardorder[i];
      cardorder[i] = cardorder[q];
      cardorder[q] = temp;
    }
  
    console.log(cardorder);
    return cardorder;
  }
  
  function displayCards(order) {
    cards.innerHTML = "";
    for (let i = 0; i < 5; i++){
      let divCard = document.createElement("div");
      divCard.classList.add("card");
      divCard.style.backgroundImage = `url('letters/${order[i]}.svg')`;
      divCard.alt = `Card ${i}`;
      divCard.setAttribute("index",i);
      cards.appendChild(divCard);
    }
    setTimeout(() => {
      cards.innerHTML = "";
      for (let i = 0; i<5 ; i++){
        let divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.style.backgroundColor = "purple";
        divCard.alt  = `Card ${i}`;
        divCard.addEventListener('click', oyuncu);
        divCard.setAttribute("index",i);
        cards.appendChild(divCard);
      }   
    }, 2000);
  }
  function oyuncu(kart) {
    const hedeflenenkart = kart.target 
    const tıklanankart = Number(hedeflenenkart.getAttribute("index"));
    if (counter == mixedorder[tıklanankart]){
      hedeflenenkart.style.backgroundImage = `url('letters/${mixedorder[tıklanankart]}.svg')`;
      score.innerHTML = (counter)*20
      counter++;
    }
    else{
      cards.innerHTML = "";

      for (let i = 0; i < 5; i++){
        let divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.style.backgroundImage = `url('letters/${mixedorder[i]}.svg')`;
        divCard.alt = `Card ${i}`;
        divCard.setAttribute("index",i);
        cards.appendChild(divCard);
      }
    }
  }
    startbutton.addEventListener('click', () => {
    gamestarter()
  });
    restartbutton.addEventListener('click', () => {
    gamestarter()
  });
  
  
  });