const menCheckBox = document.querySelectorAll(".menCheckbox");
const womenCheckBox = document.getElementsByClassName("womenCheckbox");
const kidsCheckBox = document.getElementsByClassName("kidsCheckbox");
const jewelryCheckBox = document.getElementsByClassName("jewelryCheckbox");
// const checkBox = document.querySelectorAll("input");
let numberOfItemsForMen = document.getElementById("menItemNumber");
let numberOfItemsForWomen = document.getElementById("womenItemNumber");
let numberOfItemsForKids = document.getElementById("kidsItemNumber");
let numberOfItemsForJewelry = document.getElementById("jewelryItemNumber");
let numberOfItems = document.querySelectorAll(".input");
let dropdown = document.querySelectorAll(".dropdown-content");

const menUnit = document.getElementById("menUnit");
const womenUnit = document.getElementById("womenUnit");
const kidsUnit = document.getElementById("kidsUnit");
const jewelryUnit = document.getElementById("jewelryUnit");
const totalAmount = document.getElementById("totalAmount");

const calcBtn = document.querySelector(".calcBtn");
const men = document.querySelectorAll(".men");
const women = document.querySelectorAll(".women");
const kids = document.querySelectorAll(".kids");

const jewelry = document.querySelectorAll(".jewelry");
let menItems = document.querySelector("#men");
const menItemsPrice = document.querySelector(".menCost");
const womenItemsPrice = document.querySelector(".womenCost");
const kidsItemsPrice = document.querySelector(".kidsCost");
const jewelryItemsPrice = document.querySelector(".jewelryCost");
// const ass = document.getElementById("Ass");
console.log(menItemsPrice.textContent);

function myFunction() {
  console.log(menUnit.selectedIndex);

  const a = menUnit.selectedIndex;
  for (let i = 0; i < 5; i++) {
    if (men[i].checked) {
      const w = Number(men[i].value);
      console.log(w);
      let menTotal = a * w;

      menItemsPrice.textContent = `$${menTotal}`;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (women[i].checked) {
      const b = womenUnit.selectedIndex;

      const x = Number(women[i].value);
      let womenTotal = b * x;
      womenItemsPrice.textContent = `$${womenTotal}`;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (kids[i].checked) {
      const c = kidsUnit.selectedIndex;
      const y = Number(kids[i].value);
      let kidsTotal = c * y;
      kidsItemsPrice.textContent = `$${kidsTotal}`;
    }
  }

  for (let i = 0; i < 5; i++) {
    const d = jewelryUnit.selectedIndex;
    if (jewelry[i].checked) {
      const z = Number(jewelry[i].value);
      let jewelryTotal = d * z;

      jewelryItemsPrice.textContent = `$${jewelryTotal}`;
    }
  }

  let menP = menItemsPrice.textContent;
  let womenP = womenItemsPrice.textContent;
  let kidsP = kidsItemsPrice.textContent;
  let jewelryP = jewelryItemsPrice.textContent;

  menP = menP.slice(1);
  womenP = womenP.slice(1);
  kidsP = kidsP.slice(1);
  jewelryP = jewelryP.slice(1);

  menP = Number(menP);
  womenP = Number(womenP);
  kidsP = Number(kidsP);
  jewelryP = Number(jewelryP);

  calcBtn.addEventListener("click", function () {
    totalAmount.textContent = `$${menP + womenP + kidsP + jewelryP}`;

    setTimeout(() => {
      let answer = prompt(
        "Do you accept the calculated total cost of payment?, Enter 'Yes' or 'No'"
      );
      if (answer == "Yes") {
        alert("Thank You");
      } else if (answer == "yes") {
        alert("Thank You");
      } else {
        alert("Application Withdrawn");
      }
    }, 2000);
  });
}
