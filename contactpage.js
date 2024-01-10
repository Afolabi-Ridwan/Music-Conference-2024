const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const form = document.querySelector("form");
// 
const message = document.getElementById("message");

let isNameInput = false;
let isMailInput = false;
let isMessageInput = false;

function nameInputHandler(event) {
  console.log(event.target.value);
  if (event.target.value.length < 4) {
    nameInput.classList.add("invalid");
    alert("Enter more than 3 letters in the name input bar");
  } else {
    nameInput.classList.add("valid");
    isNameInput = true;
  }
}

function emailInputHandler(event) {
  console.log(event.target.value);

  const emailState = event.target.value.includes("@" && ".");
  if (!emailState) {
    emailInput.classList.add("invalid");
    alert("Please enter a correct mail format");
    //
  } else {
    emailInput.classList.add("valid");
    isMailInput = true;
  }
}

function messageInputHandler(event) {
  if (event.target.value.length < 5) {
    message.classList.add("invalid");
    alert("Enter more words in the message tab");
    //
  } else {
    message.classList.add("valid");
    isMessageInput = true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isNameInput && isMailInput && isMessageInput) {
    alert(" ✔ Message Sent Successfully!!!");
  } else {
    alert(" ❌ Make sure your inputs are all filled correctly and retry");
  }
});
