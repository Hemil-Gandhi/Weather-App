import "./index.css";

const uv_Index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function random(max) {
  return Math.floor(Math.random() * max);
}

const wind = Math.floor(Math.random() * (40 - 10) + 10);

const uv = uv_Index[random(10)];

export default function WeatherInfo() {
  return (
    <div className="weather-info-container">
      <div className="info-box">
        <p className="label">UV Index</p>
        <p className="value">{uv}</p>
      </div>
      <div className="info-box">
        <p className="label">Wind Spped</p>
        <p className="value">{wind} km/h</p>
      </div>
    </div>
  );
}
