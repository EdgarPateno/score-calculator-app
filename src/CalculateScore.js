import React from "react";


class CalculateScore extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        num1: "",
        num2: "",
        num3: "",
        result: ""
      };
      this.scoreNum1 = this.scoreNum1.bind(this);
      this.scoreNum2 = this.scoreNum2.bind(this);
      this.scoreNum3 = this.scoreNum3.bind(this);
    }
    
    scoreNum1(e) {
      if (e.target.validity.valid) {
        var newNum1 = +(e.target.value)
        this.setState({
            num1: newNum1,
            result: newNum1 + this.state.num2
          }); 
      }
    }
    
    scoreNum2(e) {
      if (e.target.validity.valid) {
        var newNum2 = +(e.target.value)
        this.setState({
            num2: newNum2,
            result: this.state.num1 + newNum2
          }); 
      }
    }

    scoreNum3(e) {
        if (e.target.validity.valid) {
          var newNum3 = +(e.target.value)
          this.setState({
              num3: newNum3,
              result: this.state.num1 + this.state.num2 + newNum3
            }); 
        }
      }
  
    render() {
      return (
        <div className="container-sm mt-5">
          <div className="mb-2">
            <label className="me-2">Full Name:</label>
            <input type="text" />
          </div>
          <div className="mb-2">
            <label className="me-2">Score 1: </label>
            <input type="number" value={this.state.num1} onChange={this.scoreNum1} />
          </div>
          <div className="mb-2">
            <label className="me-2">Score 2: </label>
            <input type="number" value={this.state.num2} onChange={this.scoreNum2} />
          </div>
          <div className="mb-2">
            <label className="me-2">Score 3: </label>
            <input type="number" value={this.state.num3} onChange={this.scoreNum3} />
          </div>
          <p className="mt-3">Result: {this.state.result / 3}</p>
        </div>
      )
    }  
  }

  export default CalculateScore;