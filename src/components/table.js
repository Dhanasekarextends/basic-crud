import React, { Component } from "react";

class TableClass extends Component {
  render() {
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
          <tbody>
            <tr>
              <td>Dhanasekar</td>
              <td>Saminathan</td>
              <td>27-09-1995</td>
              <td>Male</td>
              <td>dhanasekar.rohith@gmail.com</td>
              <td>8489111279</td>
              <td>21b/1 Nimandakarar st, kanchipuram-631502</td>
              <td>21b/1 Nimandakarar st, kanchipuram-631502</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableClass;
