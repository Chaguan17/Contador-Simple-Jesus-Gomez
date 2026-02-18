import React, { Component } from "react";
import SecondsCounter from "./SecondsCounter";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isRunning: false,
      alertTime: null
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startCountUp = () => {
    clearInterval(this.interval);

    this.setState({ isRunning: true });

    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });

      if (this.state.counter === parseInt(this.state.alertTime)) {
        alert("¡Tiempo alcanzado!");
      }

    }, 1000);
  };

  startCountDown = () => {
    clearInterval(this.interval);

    this.setState({ isRunning: true });

    this.interval = setInterval(() => {

      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1
        });
      } else {
        clearInterval(this.interval);
      }

      if (this.state.counter === parseInt(this.state.alertTime)) {
        alert("¡Tiempo alcanzado!");
      }

    }, 1000);
  };

  stopCounter = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  resetCounter = () => {
    clearInterval(this.interval);
    this.setState({
      counter: 0,
      isRunning: false
    });
  };

  handleInputChange = (e) => {
    this.setState({
      counter: parseInt(e.target.value) || 0
    });
  };

  handleAlertChange = (e) => {
    this.setState({
      alertTime: e.target.value
    });
  };

  render() {
    return (
      <div className="text-center">

        <h2>Contador</h2>

        <SecondsCounter seconds={this.state.counter} />

        <br />

        <input
          type="number"
          placeholder="Número inicial"
          onChange={this.handleInputChange}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Alerta en..."
          onChange={this.handleAlertChange}
        />

        <br /><br />

        <button onClick={this.startCountUp}>Iniciar</button>
        <button onClick={this.startCountDown}>Cuenta regresiva</button>
        <button onClick={this.stopCounter}>Parar</button>
        <button onClick={this.resetCounter}>Reiniciar</button>

      </div>
    );
  }
}

export default Home;
