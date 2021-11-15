//Grab things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

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
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
};

cardGenerator();
