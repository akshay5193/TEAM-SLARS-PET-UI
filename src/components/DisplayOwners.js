import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DisplayOwners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owners: [
        {
          id: '1',
          firstName: 'Lihe',
          lastName: '2018-12-30',
          address: 'cat',
          phoneNumer: '123',
          pets: []
        },
        {
          id: '2',
          firstName: 'Simba',
          lastName: '2018-12-30',
          address: 'cat',
          phoneNumer: '12323',
          pets: []
        }
      ]
    }
  }
  displayOwnerRows() {
    return this.state.owners.map(owner => {
      return (
        <tr>
          <th scope="row">{owner.id}</th>
          <td><Link to={"/owners/" + owner.id} >{owner.firstName}</Link></td>
          <td>{owner.lastName}</td>
          <td>{owner.address}</td>
          <td>{owner.phoneNumer}</td>
          <td>{owner.pets.map(pet=>pet.name)}</td>
        </tr>
      )
    })
  }
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
          {this.displayOwnerRows()}
        </tbody>
      </table>
      <div>
        <Link to="/owners/addOwner" className="nav-link">Home</Link>
      </div>
    </div>
    );
  }
}

export default DisplayOwners;