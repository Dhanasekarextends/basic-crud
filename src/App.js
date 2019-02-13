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
      gender: "",
      email: "",
      phone: "",
      commAdd: "",
      perAdd: ""
    },
    row: []
  };
  checkedValue = () => {
    console.log(this.state.male, this.state.female);
    let male = this.state.male;
    if (male === true) {
      this.setState({ male: !male });
      this.setState({ female: male });
    } else {
      this.setState({ male: !male });
      this.setState({ female: male });
    }

    console.log(this.state.male, this.state.female);
  };

  createOnClick = () => {
    let rows = this.state.row;
    let userDetails=this.state.userDetails
    rows.push({...userDetails,id:rows.length});
    this.setState({
      row: rows
    });
    console.log(this.state.row)
  };

  inputFieldOnChange = (key, event) => {
  //   let firstName;
  //   let lastName;
  //   let dob;
  //   let gender;
  //   let email;
  //   let phone;
  //   let commAdd;
  //   let perAdd;
  //   let value=event.target.value;
  //   switch (key) {
  //     case "FirstName":
  //       firstName = value;
  //       console.log(firstName)
  //       break;
  //     case "LastName":
  //       lastName = value;
  //       break;
  //     case "DOB":
  //       dob = value;
  //       break;
  //     case "Gender":
  //       gender = value;
  //       break;
  //     case "Email":
  //       email = value;
  //       break;
  //     case "Phone":
  //       phone = value;
  //       break;
  //     case "CommunicationAddress":
  //       commAdd = value;
  //       break;
  //     case "PermanentAddress":
  //       perAdd = value;
  //       break;
  //     default:
  //   }

  //   this.setState({
  //     userDetails: {
  //       firstName: firstName,
  //       lastName: lastName,
  //       dob: dob,
  //       gender: gender,
  //       email: email,
  //       phone: phone,
  //       commAdd: commAdd,
  //       perAdd: perAdd
  //     }
  //   });
  let userDetails=this.state.userDetails;
  userDetails[key]=event.target.value;
  this.setState({userDetails})
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
              onChange={(event) => this.inputFieldOnChange("firstName",event)}
              value={this.state.userDetails.firstName}
            />
          </div>
          <div className="grid-items">
            LastName
            <br />
            <InputField
              type="text"
              onChange={(event) => this.inputFieldOnChange("lastName")}
            />
          </div>
          <div className="grid-items">
            DOB
            <br />
            <InputField
              type="date"
              onChange={() => this.inputFieldOnChange("DOB")}
            />
          </div>
          <div className="grid-items">
            Gender
            <br />
            <RadioButton
              value={"Male"}
              checked={this.state.male}
              onClick={() => this.checkedValue()}
            />{" "}
            Male
            <RadioButton
              value={"Female"}
              checked={this.state.female}
              onClick={() => this.checkedValue()}
            />
            Female
          </div>
          <div className="grid-items">
            E-mail
            <br />
            <InputField
              type="text"
              onChange={() => this.inputFieldOnChange("Email")}
            />
          </div>
          <div className="grid-items">
            Phone <br />
            <InputField onChange={() => this.inputFieldOnChange("Phone")} />
          </div>
          <div className="grid-items">
            Communication Address
            <br />
            <TextArea
              onChange={() => this.inputFieldOnChange("CommunicationAddress")}
            />
            <div>
              <RadioButton />
              Communication address is the same as permanent address
            </div>
          </div>
          <div className="grid-items">
            Permanent Address
            <br />
            <TextArea
              onChange={() => this.inputFieldOnChange("PermanentAddress")}
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
