function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  const pictureContainer = document.createElement("picture");
  const source = document.createElement("source");
  source.srcset = "images/background.jpg";
  source.media = "(min-width:600px)";
  chefImage.src = "images/nkems.jpeg";
  chefImage.alt = "Chef image";
  pictureContainer.appendChild(source);
  pictureContainer.appendChild(chefImage);

  home.appendChild(createParagraph("Best Pizza in Owerri Town"));
  home.appendChild(createParagraph("Made with passion since 2022"));
  home.appendChild(pictureContainer);
  home.appendChild(createParagraph("Order online or visit us."));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");

  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
