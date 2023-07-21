import { updateDisplay } from "./utils.js";
import Sounds from "./sounds.js";

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let sounds = Sounds();
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);
  let running;
  let timeoutId;

  function countDown() {
    if (running) {
      updateDisplay(minutes, seconds);

      if (seconds == 0 && minutes == 0) {
        sounds.kitchenTimer.currentTime = 0.5;
        sounds.kitchenTimer.play();
        stop();
      }

      if (!running) {
        return 0;
      }

      if (seconds == 0) {
        seconds = 59;
        minutes--;
        updateDisplay(minutes, seconds);
      } else {
        seconds--;
      }

      // Limpa o timeout anterior antes de definir um novo
      clearTimeout(timeoutId);
      timeoutId = setTimeout(countDown, 1000);
    }
  }

  function play() {
    if (!running) {
      running = true;
      countDown();
    }
  }

  function stop() {
    running = false;
    seconds = 0;
    minutes = 25;
    updateDisplay(minutes, "00");
    clearTimeout(timeoutId);
  }

  function add() {
    minutes++;
    updateDisplay(minutes);
  }

  function decrease() {
    if (minutes > 0) {
      minutes--;
      updateDisplay(minutes);
    }
  }

  return { countDown, stop, add, decrease, play };
}