import { getElement } from "./utils.js";

const minutesDisplay = getElement(".minutes");
const secondsDisplay = getElement(".seconds");
const playButton = getElement(".playBtn");
const stopButton = getElement(".stopBtn");
const sumButton = getElement(".sumBtn");
const subButton = getElement(".subBtn");
const forestCard = getElement(".forestSetting");
const rainCard = getElement(".rainSetting");
const coffeCard = getElement(".coffeSetting");
const fireplaceCard = getElement(".fireplaceSetting");
const slider = document.querySelectorAll(".slider input");
const sunBtn = getElement(".sun");
const moonBtn = getElement(".moon");

export {
  minutesDisplay,
  secondsDisplay,
  playButton,
  stopButton,
  sumButton,
  subButton,
  forestCard,
  rainCard,
  coffeCard,
  fireplaceCard,
  slider,
  sunBtn,
  moonBtn,
};
