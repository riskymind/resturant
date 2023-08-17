function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 07046193975";

  const address = document.createElement("p");
  address.textContent = "🏠 Okpala Umuolu Ezimba Emii, Owerri-north";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "images/background.jpg";
  restaurantLocation.alt = "Nkem's Kitchen location";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
