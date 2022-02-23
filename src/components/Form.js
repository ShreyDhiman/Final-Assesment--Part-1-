import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phoneNo: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { name, phoneNo } = this.state;
    event.preventDefault();
    if (/^[6-9]\d{9}$/.test(this.state.phoneNo)) {
      alert(`
    ____Your Details____\n
    Name : ${name}
    Phone No : ${phoneNo}
    `);
    } else {
      alert("Enter valid number");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        <div>
          <label>Phone Number</label>
          <br />
          <input
            name="phoneNo"
            placeholder="Phone No"
            value={this.state.phoneNo}
            onChange={(e) => this.setState({ phoneNo: e.target.value })}
          />
        </div>
        <div>
          <br />
          <button>Create Account</button>
        </div>
      </form>
    );
  }
}

export default Form;
