import React, { Component } from 'react';

class SumCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: 0
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: parseInt(value) || 0 }); // Chuyển đổi giá trị sang số nguyên, nếu không thành công thì sử dụng 0
  }

  calculateSum = () => {
    const { number1, number2 } = this.state;
    const sum = number1 + number2;
    this.setState({ sum });
  }

  render() {
    const { number1, number2, sum } = this.state;

    return (
      <div>
        <h2>Sum Calculator</h2>
        <div>
          <label htmlFor="number1">Number 1:</label>
          <input type="text" id="number1" name="number1" value={number1} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="number2">Number 2:</label>
          <input type="text" id="number2" name="number2" value={number2} onChange={this.handleInputChange} />
        </div>
        <button onClick={this.calculateSum}>Calculate Sum</button>
        <div>
          <p>Sum: {sum}</p>
        </div>
      </div>
    );
  }
}

export default SumCalculator;
