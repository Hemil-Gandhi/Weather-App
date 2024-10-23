import "./index.css";
import rain_Image from "./assets/rain_Image.png";
import sun_Image from "./assets/sun_Image.png";
import heavy_Rain from "./assets/heavy_Rain.png";
import mild_Rain from "./assets/mild_Rain.png";

const values = ["Madrid", "Delhi", "London", "Vadodara"];

const chance = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const cityName = values[random(4)];

const rain = chance[random(10)];

const imageSource =
  rain < 50
    ? sun_Image
    : rain >= 80
    ? heavy_Rain
    : rain >= 50
    ? rain_Image
    : mild_Rain;

const temperature = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
function random(max) {
  return Math.floor(Math.random() * max);
}
export default function MainInfo() {
  return (
    <div className="container">
      <h1>{cityName}</h1>
      <p>Chances of rain:{rain}%</p>
      <img src={imageSource} alt="rain" />
      <p>
        Weather:{" "}
        {rain >= 80
          ? "Heavy Rain"
          : rain >= 50
          ? "Mild to Heavy Rain"
          : "Sunny"}
      </p>
      <h4>Temperature : {temperature}°C</h4>
    </div>
  );
}
