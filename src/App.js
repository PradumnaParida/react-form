import React from "react";
import "./App.css";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["phone"] = "";
      input["aadhar"] = "";
      input["address"] = "";
      input["state"] = "";
      input["country"] = "";
      input["pin"] = "";
      input["gender"] = "";
      this.setState({ input: input });

      alert("Form is submited");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length != 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    if (!input["aadhar"]) {
      isValid = false;
      errors["aadhar"] = "Please enter your aadhar number.";
    }

    if (typeof input["aadhar"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["aadhar"])) {
        isValid = false;
        errors["aadhar"] = "Please enter only number.";
      } else if (input["aadhar"].length != 12) {
        isValid = false;
        errors["aadhar"] = "Please enter valid aadhar number.";
      }
    }

    if (!input["address"]) {
      isValid = false;
      errors["address"] = "Please enter your address.";
    }

    if (!input["state"]) {
      isValid = false;
      errors["state"] = "Please enter your state.";
    }
    if (!input["country"]) {
      isValid = false;
      errors["country"] = "Please enter your country.";
    }
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (!input["pin"]) {
      isValid = false;
      errors["pin"] = "Please enter your pincode.";
    }

    if (typeof input["pin"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["pin"])) {
        isValid = false;
        errors["pin"] = "Please enter only number.";
      } else if (input["pin"].length != 6) {
        isValid = false;
        errors["pin"] = "Please enter valid pincode.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div id="bd">
        <div id="bodyy">
          <h1>FILL THE FORM</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                value={this.state.input.name}
                onChange={this.handleChange}
                placeholder="Enter name"
                id="name"
              />

              <div className="danger">{this.state.errors.name}</div>
            </div>
            <br />

            <div>
              <label htmlFor="email">Email Address:</label>
              <br />
              <input
                type="text"
                name="email"
                value={this.state.input.email}
                onChange={this.handleChange}
                placeholder="Enter email"
                id="email"
              />

              <div className="danger">{this.state.errors.email}</div>
            </div>
            <br />

            <div>
              <label htmlFor="password">Password :</label>
              <br />
              <input
                type="password"
                name="password"
                value={this.state.input.password}
                onChange={this.handleChange}
                placeholder="Enter password"
                id="password"
              />

              <div className="danger">{this.state.errors.password}</div>
            </div>
            <br />

            <div>
              <label htmlFor="Phone">Phone:</label>
              <br />
              <input
                type="text"
                name="phone"
                value={this.state.input.phone}
                onChange={this.handleChange}
                placeholder="Enter phone"
                id="phone"
              />

              <div className="danger">{this.state.errors.phone}</div>
            </div>
            <br />

            <div>
              <label htmlFor="Aadhar">Aadhar Number:</label>
              <br />
              <input
                type="text"
                name="aadhar"
                value={this.state.input.aadhar}
                onChange={this.handleChange}
                placeholder="Enter Aadhar Number"
                id="aadhar"
              />

              <div className="danger">{this.state.errors.aadhar}</div>
            </div>
            <br />

            <div>
              <label htmlFor="gender">Gender:</label>
              <br />
              <select
                name="gender"
                value={this.state.input.gender}
                onChange={this.handleChange}
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            <br />

            <div>
              <label htmlFor="address">Address:</label>
              <br />
              <textarea
                name="address"
                value={this.state.input.address}
                onChange={this.handleChange}
                placeholder="Enter your street address"
                id="address"
              />

              <div className="danger">{this.state.errors.address}</div>
            </div>
            <br />

            <div>
              <label htmlFor="state">State:</label>
              <br />
              <input
                type="text"
                name="state"
                value={this.state.input.state}
                onChange={this.handleChange}
                placeholder="Enter state"
                id="state"
              />

              <div className="danger">{this.state.errors.state}</div>
            </div>
            <br />

            <div>
              <label htmlFor="country">Country:</label>
              <br />
              <input
                type="text"
                name="country"
                value={this.state.input.country}
                onChange={this.handleChange}
                placeholder="Enter country"
                id="country"
              />

              <div className="danger">{this.state.errors.country}</div>
            </div>
            <br />

            <div>
              <label htmlFor="Pin">PINCODE:</label>
              <br />
              <input
                type="text"
                name="pin"
                value={this.state.input.pin}
                onChange={this.handleChange}
                placeholder="Enter pin"
                id="pin"
              />

              <div className="danger">{this.state.errors.pin}</div>
            </div>
            <br />

            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
