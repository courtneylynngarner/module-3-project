console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Thank you for submitting this form!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

function complimentUser(event) {
  alert("You are a brilliant human!");
}

let image = document.querySelector("img");

image.addEventListener("mouseover", complimentUser);
