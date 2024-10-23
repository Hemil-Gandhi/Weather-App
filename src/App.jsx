import React from "react";
import WeatherInfo from "./WeatherInfo";
import MainInfo from "./MainInfo";

const handleRefresh = () => {
  window.location.reload();
};
const App = () => {
  return (
    <div>
      <body>
        <main>
          <MainInfo />
          <WeatherInfo />
          <button onClick={handleRefresh} className="refresh-button">
            Refresh
          </button>
        </main>
      </body>
    </div>
  );
};

export default App;
