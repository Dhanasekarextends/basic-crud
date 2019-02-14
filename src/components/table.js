import React, { Component } from "react";

class TableClass extends Component {
  render() {
    let usersList = this.props.row.map(userDetails => {
      return (
        <tr key={userDetails.id}>
          <td>{userDetails.firstName}</td>
          <td>{userDetails.lastName}</td>
          <td>{userDetails.dob}</td>
          <td>{userDetails.gender}</td>
          <td>{userDetails.email}</td>
          <td>{userDetails.phone}</td>
          <td>{userDetails.commAdd}</td>
          <td>{userDetails.perAdd}</td>
        </tr>
      );
    });
    return (
      <div>
        <table className="table-class">
          <colgroup>
            <col width="11%" />
            <col width="11%" />
            <col width="8%" />
            <col width="5%" />
            <col width="17%" />
            <col width="10%" />
            <col width="19%" />
            <col width="19%" />
          </colgroup>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Ph. Number</th>
              <th>Address 1</th>
              <th>Address 2</th>
            </tr>
          </thead>
          <tbody>{usersList}</tbody>
        </table>
      </div>
    );
  }
}

export default TableClass;
