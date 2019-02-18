import React, { Component } from "react";
import InputField from "./components/inputField";
import RadioButton from "./components/radioButton";
import TextArea from "./components/textArea";
import TableClass from "./components/table";
import CheckBox from "./components/checkBox";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  state = {
    state: true,
    sameAdd: false,
    update: false,
    userDetails: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      email: "",
      phone: "",
      commAdd: "",
      perAdd: ""
    },
    errorMsgs: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      commAdd: "",
      perAdd: ""
    },
    row: []
  };
  checkedValue = e => {
    let userDetails = this.state.userDetails;
    userDetails.gender = e.target.value;
    this.setState({
      userDetails
    });
  };

  perAdd = () => {
    let sameAdd = !this.state.sameAdd;
    let userDetails = this.state.userDetails;
    if (sameAdd) {
      userDetails.perAdd = this.state.userDetails.commAdd;
    } else {
      userDetails.perAdd = "";
    }
    this.setState({
      userDetails,
      sameAdd
    });
  };

  createOnClick = () => {
    let row = this.state.row;
    let update = false;
    let sameAdd = false;
    let userDetails = this.state.userDetails;

    //let id = row.length === 0 ? 0 : (row[row.length-1].id+1);
    this.state.update
      ? (row[userDetails.id] = userDetails)
      : row.push({ ...userDetails, id: row.length });

    this.setState({
      sameAdd,
      update,
      row,
      userDetails: {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        commAdd: "",
        perAdd: ""
      }
    });
    console.log(this.state.row);
  };

  idAlignment = () => {
    let row = this.state.row;
    for (let i = 0; i < row.length; i++) {
      row[i].id = i;
    }
    this.setState({
      row
    });
  };

  validation = () => {
    let userDetails = this.state.userDetails;
    let errorMsgs = this.state.errorMsgs;
    let check = false;
    //let emailPattern = "[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]+";
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    Object.keys(userDetails).map(key => {
      switch (key) {
        case key:
          errorMsgs[key] =
            userDetails[key] === "" ? "*" + key + " field can't be blank" : "";
          break;
        default:
      }
      if (errorMsgs[key] !== "") check = true;
      return 0;
    });

    if (userDetails.phone.length < 10 || userDetails.phone.length > 11) {
      errorMsgs["phone"] = "Enter a valid mobile number";
      check = true;
    }

    if (!re.test(String(userDetails.email).toLowerCase())) {
      errorMsgs["email"] = "Enter a valid Email Address";
      check = true;
    }

    this.setState({
      errorMsgs
    });
    if (check === false) this.createOnClick();
  };

  inputFieldOnChange = (key, event) => {
    let userDetails = this.state.userDetails;
    userDetails[key] = event.target.value;
    if (key === "commAdd" && this.state.sameAdd === true) {
      userDetails.perAdd = event.target.value;
    }
    this.setState({ userDetails });
    console.log(userDetails)
  };

  deleteRow = key => {
    if (this.state.update !== true) {
      let row = this.state.row;
      row.splice(key, 1);
      this.setState({
        row
      });
      this.idAlignment();
    }
  };

  editRow = key => {
    let row = this.state.row;
    let update = true;
    let userDetails = this.state.userDetails;
    userDetails = {...row[key]};
    this.setState({
      update,
      userDetails
    });
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
            <div className="error-msg">{this.state.errorMsgs.firstName}</div>
          </div>
          <div className="grid-items">
            LastName
            <br />
            <InputField
              type="text"
              onChange={event => this.inputFieldOnChange("lastName", event)}
              value={this.state.userDetails.lastName}
            />
            <div className="error-msg">{this.state.errorMsgs.lastName}</div>
          </div>
          <div className="grid-items">
            DOB
            <br />
            <InputField
              type="date"
              onChange={event => this.inputFieldOnChange("dob", event)}
              value={this.state.userDetails.dob}
            />
            <div className="error-msg">{this.state.errorMsgs.dob}</div>
          </div>
          <div className="grid-items">
            Gender
            <br />
            <RadioButton
              value={"Male"}
              checked={this.state.userDetails.gender === "Male"}
              onChange={event => this.checkedValue(event)}
            />
            Male{" "}
            <RadioButton
              value={"Female"}
              checked={this.state.userDetails.gender === "Female"}
              onChange={event => this.checkedValue(event)}
            />
            Female
            <div className="error-msg">{this.state.errorMsgs.gender}</div>
          </div>
          <div className="grid-items">
            E-mail
            <br />
            <InputField
              type="text"
              onChange={event => this.inputFieldOnChange("email", event)}
              value={this.state.userDetails.email}
            />
            <div className="error-msg">{this.state.errorMsgs.email}</div>
          </div>
          <div className="grid-items">
            Phone <br />
            <InputField
              type="number"
              onChange={event => this.inputFieldOnChange("phone", event)}
              value={this.state.userDetails.phone}
            />
            <div className="error-msg">{this.state.errorMsgs.phone}</div>
          </div>
          <div className="grid-items">
            Communication Address
            <br />
            <TextArea
              onChange={event => this.inputFieldOnChange("commAdd", event)}
              value={this.state.userDetails.commAdd}
            />
            <div className="error-msg">{this.state.errorMsgs.commAdd}</div>
            <div>
              <CheckBox
                value={"perAdd"}
                checked = {this.state.sameAdd}
                onChange={event => this.perAdd(event)}
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
            <div className="error-msg">{this.state.errorMsgs.perAdd}</div>
          </div>
        </div>
        <div className="create-div">
          <div className="create-button" onClick={() => this.validation()}>
            {!this.state.update ? "Create" : "Update"}
          </div>
        </div>
        <div className="table-view">
          <TableClass
            row={this.state.row}
            editOnClick={key => this.editRow(key)}
            deleteOnClick={key => this.deleteRow(key)}
          />
        </div>
      </div>
    );
  }
}

export default App;
