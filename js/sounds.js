export default function Sounds() {
  const rain = new Audio("../assets/sounds/Chuva.wav");
  const fireplace = new Audio("../assets/sounds/Lareira.wav");
  const coffe = new Audio("../assets/sounds/Cafeteria.wav");
  const forest = new Audio("../assets/sounds/Floresta.wav");
  const buttonPress = new Audio("../assets/sounds/button-click.mp3");
  const kitchenTimer = new Audio("../assets/sounds/ding.mp3");

  rain.loop = true;
  fireplace.loop = true;
  coffe.loop = true;
  forest.loop = true;

  rain.volume = 0.5;
  fireplace.volume = 0.5;
  coffe.volume = 0.5;
  forest.volume = 0.5;
  buttonPress.volume = 0.5;

  return {
    rain,
    fireplace,
    coffe,
    forest,
    buttonPress,
    kitchenTimer,
  };
}
