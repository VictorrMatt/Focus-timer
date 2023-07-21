function getElement(query) {
  return document.querySelector(query);
}

function clickListener(element, func) {
  element.addEventListener("click", func);
}

function updateDisplay(minutes, seconds = false) {
  getElement(".minutes").textContent = toComplete(minutes);
  if (seconds) {
    getElement(".seconds").textContent = toComplete(seconds);
  }
}

function toComplete(num) {
  if (String(num).length == 1) {
    return `0${num}`;
  }
  return num;
}

function toggleTheme(light = true) {
  let background = getElement("body");
  let timer = getElement(".timer");
  let controls = getElement(".controls");
  let cardsBox = getElement(".cards-box");
  let elementsList = [background, timer, controls, cardsBox];

  for (let each of elementsList) {
    if (light) {
      each.classList.remove("dark-theme");
      each.classList.add("light-theme");
    } else {
      each.classList.remove("light-theme");
      each.classList.add("dark-theme");
    }
  }
}

export { getElement, clickListener, updateDisplay, toggleTheme };