import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";

let counter = 0;
let interval = null;
let alertTime = null;
let isCountingDown = false;

const root = ReactDOM.createRoot(document.getElementById("root"));

function render() {
  const seis = Math.floor(counter / 100000) % 10;
  const cinco = Math.floor(counter / 10000) % 10;
  const cuatro = Math.floor(counter / 1000) % 10;
  const tres = Math.floor(counter / 100) % 10;
  const dos = Math.floor(counter / 10) % 10;
  const uno = Math.floor(counter / 1) % 10;

  root.render(
    <div>
      <SecondsCounter
        digit6={seis}
        digit5={cinco}
        digit4={cuatro}
        digit3={tres}
        digit2={dos}
        digit1={uno}
      />

      <div style={{ textAlign: "center", marginTop: "20px" }}>

        <input
          type="number"
          placeholder="Número inicial"
          onChange={(e) => counter = parseInt(e.target.value) || 0}
        />

        <input
          type="number"
          placeholder="Alerta en..."
          onChange={(e) => alertTime = parseInt(e.target.value)}
        />

        <br /><br />

        <button onClick={startUp}>Iniciar</button>
        <button onClick={startDown}>Cuenta regresiva</button>
        <button onClick={stop}>Parar</button>
        <button onClick={resume}>Resumir</button>
        <button onClick={reset}>Reiniciar</button>

      </div>
    </div>
  );
}

function startUp() {
  clearInterval(interval);
  isCountingDown = false;

  interval = setInterval(() => {
    counter++;

    checkAlert();
    render();
  }, 1000);
}

function startDown() {
  clearInterval(interval);
  isCountingDown = true;

  interval = setInterval(() => {
    if (counter >= 1) {
      counter--;
    } else {
      clearInterval(interval);
    }

    checkAlert();
    render();
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function resume() {
  if (isCountingDown) {
    startDown();
  } else {
    startUp();
  }
}

function reset() {
  clearInterval(interval);
  counter = 0;
  render();
}

function checkAlert() {
  if (alertTime !== null && counter === alertTime) {
    alert("⏰ ¡Tiempo alcanzado!");
  }
}

render();
export default Home;