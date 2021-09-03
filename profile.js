function ourFaveColor(event) {
  alert("My Favorite Color is Orange, Mia's favorite color is purple!");
}
let color = document.querySelector("#color");
color.addEventListener("click", ourFaveColor);

function ourFavePlace(event) {
  alert(
    "My favorite place is the beach! Mia's favorite place is her Papa's house for treats and jumping on the trampoline."
  );
}
let favePlace = document.querySelector("#place");
favePlace.addEventListener("click", ourFavePlace);

function ourFaveRituals(event) {
  alert(
    "Our favorite rituals are morning cuddles in bed and mommy & daughter dates on the weekends."
  );
}
let faveRituals = document.querySelector("#ritual");
faveRituals.addEventListener("click", ourFaveRituals);
