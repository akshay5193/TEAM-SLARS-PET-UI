import React, { Component } from 'react';

class DisplayOwners extends Component {
  render() {
    return (
      <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Telephone</th>
            <th scope="col">Pets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@12313</td>
            <td>@adaada</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@12313</td>
            <td>@adaada</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@12313</td>
            <td>@adaada</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default DisplayOwners;