import React, { Component } from "react";
import InputField from "./components/inputField";
import RadioButton from "./components/radioButton";
import TextArea from "./components/textArea";
import TableClass from "./components/table";
import "./App.css";

class App extends Component {
  state = {
    male: true,
    female: false,
    state: true,
    userDetails: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "Male",
      email: "",
      phone: "",
      commAdd: "",
      perAdd: ""
    },
    row: []
  };
  checkedValue = key => {
    if (key == "gender") {
      let userDetails = this.state.userDetails;
      let male = this.state.male;
      this.setState({
        male: !male,
        female: male
      });
      userDetails.gender = !this.state.male ? "Male" : "Female";
      this.setState({
        userDetails
      });
    } else if (key == "perAdd") {
    }
  };

  createOnClick = () => {
    let rows = this.state.row;
    let userDetails = this.state.userDetails;
    rows.push({ ...userDetails, id: rows.length });
    this.setState({
      row: rows
    });
    this.setState({
      userDetails: {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "Male",
        email: "",
        phone: "",
        commAdd: "",
        perAdd: ""
      }
    });
    console.log(this.state.userDetails);
  };

  inputFieldOnChange = (key, event) => {
    let userDetails = this.state.userDetails;
    userDetails[key] = event.target.value;
    this.setState({ userDetails });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="grid-view">
          <div className="grid-items">
            FirstName
            <br />
            <InputField
              type="text"
              onChange={event => this.inputFieldOnChange("firstName", event)}
              value={this.state.userDetails.firstName}
            />
          </div>
          <div className="grid-items">
            LastName
            <br />
            <InputField
              type="text"
              onChange={event => this.inputFieldOnChange("lastName", event)}
            />
          </div>
          <div className="grid-items">
            DOB
            <br />
            <InputField
              type="date"
              onChange={event => this.inputFieldOnChange("dob", event)}
            />
          </div>
          <div className="grid-items">
            Gender
            <br />
            <RadioButton
              value={"Male"}
              checked={this.state.male}
              onChange={event => this.checkedValue("gender", event)}
            />{" "}
            Male
            <RadioButton
              value={"Female"}
              checked={this.state.female}
              onChange={event => this.checkedValue("gender", event)}
            />
            Female
          </div>
          <div className="grid-items">
            E-mail
            <br />
            <InputField
              type="text"
              onChange={event => this.inputFieldOnChange("email", event)}
            />
          </div>
          <div className="grid-items">
            Phone <br />
            <InputField
              onChange={event => this.inputFieldOnChange("phone", event)}
            />
          </div>
          <div className="grid-items">
            Communication Address
            <br />
            <TextArea
              onChange={event => this.inputFieldOnChange("commAdd", event)}
            />
            <div>
              <RadioButton
                value={"perAdd"}
                checked={this.state.male}
                onChange={event => this.checkedValue("perAdd", event)}
              />
              Communication address is the same as permanent address
            </div>
          </div>
          <div className="grid-items">
            Permanent Address
            <br />
            <TextArea
              onChange={event => this.inputFieldOnChange("perAdd", event)}
            />
          </div>
        </div>
        <div className="create-div">
          <div className="create-button" onClick={() => this.createOnClick()}>
            Create
          </div>
        </div>
        <div className="table-view">
          <TableClass />
        </div>
      </div>
    );
  }
}

export default App;
