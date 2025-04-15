document.addEventListener("DOMContentLoaded", function () {
  const switchContainers = document.querySelectorAll(
    ".switch-container-universal, .switch-container-mob"
  );
  switchContainers.forEach((switchContainer) => {
    switchContainer.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      switchContainer.classList.toggle("dark");
    });
  });
});

// const bigSwitchers = document.querySelectorAll(".switch-container-universal, .switch-container-mob");
// const switchOverlay = document.querySelectorAll(".switch-overlay")
// const smallSwitcher = document.querySelectorAll(".switch-small-circle");

// bigSwitchers.forEach((bigSwitcher, index) => {
//   bigSwitcher.addEventListener("click", () => outHandler(index));
// });


// let step = 0;
// const outHandler = () => {
//   step += 24;
  
//   if (step >= 25) {
//     step = 0;
    
//   }
//   smallSwitcher[index].style.top = "0.6px";
//   smallSwitcher[index].style.left = `${step}px`;
//   switchOverlay[index].style.backgroundColor = "#9bb537"
// };

const bigSwitchers = document.querySelectorAll(".switch-container-universal, .switch-container-mob");
const smallSwitchers = document.querySelectorAll(".switch-small-circle");
const switchOverlay = document.querySelectorAll(".switch-overlay")

bigSwitchers.forEach((bigSwitcher, index) => {
  bigSwitcher.addEventListener("click", () => outHandler(index));
});

let step = 0; // Винесено змінну за межі функції

function outHandler(index) {
  step += 24;

  if (step >= 26) {
    step = 0;
  switchOverlay[index].style.backgroundColor = "#CECDCD";

  }
  smallSwitchers[index].style.top = "3%";
  smallSwitchers[index].style.left = `${step}px`;
  switchOverlay[index].style.backgroundColor = "#9bb537";

}


// посилання на спилізацію свічера https://codepen.io/mburnette/pen/LxNxNg