const products = [
  { img: "rug.png", name: "Mars rug", price: 100, dona: 24 },
  { img: "sticker.png", name: "Keyboard sticker", price: 49, dona: 11 },
  { img: "watch.png", name: "Smart watch", price: 899, dona: 4 },
  { img: "keyboard.png", name: "Wireless keyboard", price: 350, dona: 0 },
  { img: "mouse.png", name: "Mouse", price: 359, dona: 24 },
  { img: "airpods.png", name: "AirPods", price: 499, dona: 11 },
  { img: "powerbank.png", name: "PowerBank", price: 899, dona: 5 },
  { img: "usb.png", name: "USB flash drive", price: 299, dona: 21 },
  { img: "phone.png", name: "Smartphone", price: 3699, dona: 2 },
  {
    img: "playstation.png",
    name: "Playstation 5",
    price: 7449,
    dona: "0",
  },
  { img: "yandex.png", name: "Yandex Station", price: 1990, dona: 4 },
  { img: "planshet.png", name: "Planshet Samsung", price: 4999, dona: 24 },
];

let cards = document.getElementById("cards");

let search = document.getElementById("search");
let click = document.getElementById("click");

function createCard(params) {
  let card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  let img = document.createElement("img");
  img.src = params?.img;
  card.appendChild(img);

  let name = document.createElement("p");
  name.classList.add("card-name");
  name.innerHTML = params?.name;
  card.appendChild(name);

  let price_div = document.createElement("div");
  price_div.classList.add("card-price");
  card.appendChild(price_div);

  let coin = document.createElement("img");
  coin.src = "coin.svg";
  price_div.appendChild(coin);

  let price = document.createElement("p");
  price.classList.add("card-coin");
  price.innerHTML = params?.price + " Coins";
  price_div.appendChild(price);

  let dona = document.createElement("p");
  dona.classList.add("card-dona");
  dona.innerHTML = params?.dona + " dona mavjud";
  card.appendChild(dona);
}

function renderCards(params) {
  params.forEach((item) => {
    createCard(item);
  });
}

renderCards(products);

click.addEventListener("click", () => {
  cards.innerHTML = "";
  let filterProducts = products.filter((item) => 
    item?.name.toLowerCase().includes(search.value.toLowerCase()));
  renderCards(filterProducts);
});
