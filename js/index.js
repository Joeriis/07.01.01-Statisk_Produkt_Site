//indhold
const indholdSomSenereKommerFraEnDatabase = {
  price: 345,
  title: "En flot kop",
  description: "her kommer der en masse tekst",
};

const template = document.querySelector("template").content;

const copy = template.cloneNode(true);

copy.querySelector("h2").textContent = indholdSomSenereKommerFraEnDatabase.title;

copy.querySelector(".description").textContent = indholdSomSenereKommerFraEnDatabase.description;

copy.querySelector(".price").textContent = indholdSomSenereKommerFraEnDatabase.price;

const parent = document.querySelector("main");
parent.append(copy);
