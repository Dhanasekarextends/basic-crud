import React, { Component } from "react";
import InputField from "./components/inputField";
import RadioButton from "./components/radioButton";
import TextArea from "./components/textArea";
import TableClass from "./components/table";
import CheckBox from "./components/checkBox";
import "./App.css";

class App extends Component {
  state = {
    male: true,
    female: false,
    state: true,
    sameAdd: false,
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
  checkedValue = key => {
    if (key === "gender") {
      this.setGender();
    } else if (key === "perAdd") {
      let sameAdd = !this.state.sameAdd;
      this.setState({
        sameAdd
      });
      let userDetails = this.state.userDetails;
      if (sameAdd) {
        userDetails.perAdd = this.state.userDetails.commAdd;
        console.log(userDetails.perAdd);
      } else {
        userDetails.perAdd = "";
      }
      this.setState({
        userDetails
      });
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
    // userDetails:{
    //   firstName: "",
    //   lastName: "",
    //   dob: "",
    //   gender: "Male",
    //   email: "",
    //   phone: "",
    //   commAdd: "",
    //   perAdd: ""
    // }
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

  validation = () => {
    let userDetails = this.state.userDetails;
    let errorMsgs = this.state.errorMsgs;
    let check = false;
    Object.keys(userDetails).map((key)=> {
     switch(key){
       case key : errorMsgs[key] = userDetails[key] === "" ? ("*"+key+" field can't be blank") : "";
     }
     if(errorMsgs[key]!="")
      check=true;
    console.log(errorMsgs)
    });
    
    this.setState({
      errorMsgs
    });
    if(check===false)
      this.createOnClick();
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
            <div className="error-msg">
              {this.state.errorMsgs.firstName}
            </div>
          </div>
          <div className="grid-items">
            LastName
            <br />
            <InputField
              type="text"
              onChange={event => this.inputFieldOnChange("lastName", event)}
              value={this.state.userDetails.lastName}
            />
            <div className="error-msg">
              {this.state.errorMsgs.lastName}
            </div>
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
            <div className="error-msg">{this.state.errorMsgs.email}</div>
          </div>
          <div className="grid-items">
            Phone <br />
            <InputField
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
            <div className="error-msg">{this.state.errorMsgs.perAdd}</div>
          </div>
        </div>
        <div className="create-div">
          <div className="create-button" onClick={() => this.validation()}>
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
