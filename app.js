//Grab things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 8;

//link text
playerLivesCount.textContent = playerLives;

//generate the data
const getData = () => [
  { imgScr: "./images/Ariana.jpeg", name: "Ariana" },
  { imgScr: "./images/BeachBoys.jpg", name: "Beach Boys" },
  { imgScr: "./images/GunsAndRoses.jpg", name: "Guns and Roses" },
  { imgScr: "./images/linkin-park.jpg", name: "Linkin Park" },
  { imgScr: "./images/Metallica.jpg", name: "Metallica" },
  { imgScr: "./images/PinkFloyd.jpeg", name: "Pink Floyd" },
  { imgScr: "./images/queen.jpg", name: "Queen" },
  { imgScr: "./images/Weezer.jpg", name: "Weezer" },
  { imgScr: "./images/Ariana.jpeg", name: "Ariana" },
  { imgScr: "./images/BeachBoys.jpg", name: "Beach Boys" },
  { imgScr: "./images/GunsAndRoses.jpg", name: "Guns and Roses" },
  { imgScr: "./images/linkin-park.jpg", name: "Linkin Park" },
  { imgScr: "./images/Metallica.jpg", name: "Metallica" },
  { imgScr: "./images/PinkFloyd.jpeg", name: "Pink Floyd" },
  { imgScr: "./images/queen.jpg", name: "Queen" },
  { imgScr: "./images/Weezer.jpg", name: "Weezer" },
];

//Randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card Generator Function
const cardGenerator = () => {
  const cardData = randomize();
  //Generate the HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach the info to the cards
    face.src = item.imgScr;
    card.setAttribute("name", item.name);
    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Check Cards
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  console.log(flippedCards);

  //logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");

        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      console.log(playerLives);
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Try Again");
      }
    }
  }
  //Run a check to see if we won the game
  if (toggleCard.length === 16) {
    setTimeout(() => {
      restart("You Won!");
    }, 1000);
  }
};

//Restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //Randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgScr;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 8;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
