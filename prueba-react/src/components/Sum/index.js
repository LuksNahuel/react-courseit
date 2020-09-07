import React from "react";

class Sum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      totalSum: 0,
    };
  }

  handleInputNumber(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { firstNumber, secondNumber } = this.state;
    this.setState({
      totalSum: +firstNumber + +secondNumber,
    });
  }

  render() {
    const { totalSum } = this.state;
    return (
      <div>
        <input
          name="firstNumber"
          type="number"
          onChange={(e) => this.handleInputNumber(e)}
        />
        <input
          name="secondNumber"
          type="number"
          onChange={(e) => this.handleInputNumber(e)}
        />
        <button onClick={() => this.handleClick()}>Sumar</button>
        <p>La suma es: {totalSum}</p>
      </div>
    );
  }
}

export default Sum;
