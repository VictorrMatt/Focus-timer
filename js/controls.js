import Timer from "./timer.js";
import Sounds from "./sounds.js";
import { toggleTheme } from "./utils.js";
import { rainCard } from "./elements.js";

export default function Controls({
  minutesDisplay,
  secondsDisplay,
  sunBtn,
  moonBtn,
}) {
  const timer = Timer({ minutesDisplay, secondsDisplay });
  const sounds = Sounds();
  let activeSound = sounds.rain;
  let activeCard = rainCard;
  sounds.rain.play();

  function play() {
    timer.play();
    buttonPress();
  }

  function stop() {
    timer.stop();
    buttonPress();
  }

  function add() {
    timer.add();
    buttonPress();
  }

  function decrease() {
    timer.decrease();
    buttonPress();
  }

  // This function changes and pauses the sounds
  function toggleSound(sound) {
    // If the input is from the slider, the function will not be executed
    let isSlider = event.target.tagName.toLowerCase() === "input";

    if (isSlider) {
      return;
    }

    activeButton();
    if (sound === activeSound) {
      sound.pause();
      activeSound = null;
      activeButton(true);
    } else {
      activeSound && activeSound.pause();
      activeSound = sound;
      activeSound.play();
    }
    buttonPress();
  }

  function changeVolume() {
    let environment = event.target.dataset.environment;
    let currentVolume = Number(event.target.value) / 100;

    sounds[environment].volume = currentVolume;
  }

  // Fixing event entry and adding "active" class to cards
  function activeButton(remove = false) {
    let card = event.target;

    if (card.tagName.toLowerCase() === "svg") {
      card = card.parentElement;
    } else if (card.tagName.toLowerCase() === "path") {
      card = card.parentElement.parentElement;
    }

    if (remove) {
      activeCard.classList.remove("active");
      activeCard = null;
      return;
    }

    if (card === activeCard) {
      return;
    } else {
      if (activeCard) {
        activeCard.classList.remove("active");
      }
      activeCard = card;
      activeCard.classList.add("active");
    }
  }

  // Basically toggle the "hide" class between two icons
  function toggleButton() {
    if (moonBtn.classList.contains("hide")) {
      toggleTheme(false);
    } else {
      toggleTheme();
    }
    moonBtn.classList.toggle("hide");
    sunBtn.classList.toggle("hide");
  }

  function buttonPress() {
    sounds.buttonPress.currentTime = 0.2;
    sounds.buttonPress.play();
  }

  return {
    play,
    stop,
    add,
    decrease,
    rainToggle: () => toggleSound(sounds.rain),
    forestToggle: () => toggleSound(sounds.forest),
    coffeToggle: () => toggleSound(sounds.coffe),
    fireplaceToggle: () => toggleSound(sounds.fireplace),
    changeVolume,
    toggleButton,
  };
}
