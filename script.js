const featuresDropDownDiv = document.querySelector(".features-dropdown");
const clientsDiv = document.querySelector(".clients");
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-menu-button");
const openDropDown = document.querySelectorAll(".open-dropdown");
const closeDropDown = document.querySelectorAll(".close-dropdown");
const dropDownElement = document.querySelectorAll(".dropdown");
const body = document.querySelector("body");

const featuresData = [
  {
    img: "./images/icon-todo.svg",
    text: "Todo List"
  },
  {
    img: "./images/icon-calendar.svg",
    text: "Calendar"
  },
  {
    img: "./images/icon-reminders.svg",
    text: "Reminders"
  },
  {
    img: "./images/icon-planning.svg",
    text: "Planning"
  },
];

const clientsData = [
  {
    img: "./images/client-databiz.svg",
    imgAlt: "client-databiz logo"
  },
  {
    img: "./images/client-audiophile.svg",
    imgAlt: "client-audiophile logo"
  },
  {
    img: "./images/client-meet.svg",
    imgAlt: "client-meet logo"
  },
  {
    img: "./images/client-maker.svg",
    imgAlt: "client-maker logo"
  }
];

function renderFeatures(){

  for(const featureData of featuresData){
    const feature = document.createElement("div");
    feature.classList.add("feature");

    const featureImg = document.createElement("img");
    featureImg.src = featureData.img;
    featureImg.alt = featureData.img;
    feature.appendChild(featureImg);

    const featureText = document.createElement("a");
    featureText.textContent = featureData.text;
    featureText.href = "#"
    feature.appendChild(featureText);
    
    featuresDropDownDiv.appendChild(feature);
  };

};

function renderClientsData(){
  
  for(const clientData of clientsData){
    const clientLogo = document.createElement("img");
    clientLogo.src = clientData.img;
    clientLogo.alt = clientData.imgAlt;
    clientsDiv.appendChild(clientLogo);
  };

};

function displayMenu(){
  menu.style.display = "flex";
  body.classList.add("active");
};

function hideMenu(){
  menu.style.display = "none";
  body.classList.remove("active");
};

openDropDown.forEach(button =>{
  button.addEventListener("click", ()=>{
    const dropDown = button.parentElement.parentElement.querySelector(".dropdown");
    dropDown.style.display = "flex";
    /*closeDropDown.style.display = "block";
    openDropDown.style.display = "none";*/
    button.style.display = "none";
    const closeDropDownButton = button.parentElement.querySelector(".close-dropdown");
    closeDropDownButton.style.display = "block";
  });
});

closeDropDown.forEach(button =>{
  button.addEventListener("click", ()=>{
    const dropDown = button.parentElement.parentElement.querySelector(".dropdown");
    dropDown.style.display = "none";
    button.style.display = "none";
    const openDropDownButton = button.parentElement.querySelector(".open-dropdown");
    openDropDownButton.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", ()=>{
  renderFeatures();
  renderClientsData();
});

menuButton.addEventListener("click", ()=>{
  displayMenu();
});

closeButton.addEventListener("click", ()=>{
  hideMenu();
});