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
    sameAdd: true,
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
    if (key === "gender") {
      this.setGender();
    } else if (key === "perAdd") {
      console.log("addr");
    }
  };

  setGender() {
    let male = this.state.male;
    let userDetails = this.state.userDetails;
    this.setState({
      male: !male,
      female: male
    });
    userDetails.gender = !this.state.male ? "Male" : "Female";
    this.setState({
      userDetails
    });
  }

  createOnClick = () => {
    let rows = this.state.row;
    let userDetails = this.state.userDetails;
    rows.push({ ...userDetails, id: rows.length });
    this.setState({
      row: rows
    });
    this.setGender();
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
              value={this.state.userDetails.lastName}
            />
          </div>
          <div className="grid-items">
            DOB
            <br />
            <InputField
              type="date"
              onChange={event => this.inputFieldOnChange("dob", event)}
              value={this.state.userDetails.dob}
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
              value={this.state.userDetails.email}
            />
          </div>
          <div className="grid-items">
            Phone <br />
            <InputField
              onChange={event => this.inputFieldOnChange("phone", event)}
              value={this.state.userDetails.phone}
            />
          </div>
          <div className="grid-items">
            Communication Address
            <br />
            <TextArea
              onChange={event => this.inputFieldOnChange("commAdd", event)}
              value={this.state.userDetails.commAdd}
            />
            <div>
              <RadioButton
                value={"perAdd"}
                checked={this.state.sameAdd}
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
              value={this.state.userDetails.perAdd}
            />
          </div>
        </div>
        <div className="create-div">
          <div className="create-button" onClick={() => this.createOnClick()}>
            Create
          </div>
        </div>
        <div className="table-view">
          <TableClass row={this.state.row} />
        </div>
      </div>
    );
  }
}

export default App;
