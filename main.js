const bucket = [
  { itemName: "Sukienka", itemCost: "50", itemImg: "linkToPhoto" },
  { itemName: "Spódnica", itemCost: "59.99", itemImg: "linkToPhoto" },
];

const addItem = (name, cost, img) => {
  bucket.push({ itemName: name, itemCost: cost, itemImg: img });
};

const countBusket = bucket.length;

document.querySelector("#nrItems").innerHTML = countBusket;

// open nav Fuction

const mobileMenu = document.querySelector("#mobileMenu");
const toggleMobNav = () => {
  if (mobileMenu.classList == "mobileMenu active") {
    mobileMenu.classList.remove("active");
  } else {
    mobileMenu.classList.add("active");
  }
};
