const featuresDropDownDiv = document.querySelector(".features-dropdown");
const clientsDiv = document.querySelector(".clients")

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

document.addEventListener("DOMContentLoaded", ()=>{
  renderFeatures();
  renderClientsData();
});