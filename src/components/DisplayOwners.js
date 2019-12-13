import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class DisplayOwners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owners: [],
      pets: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://petclinic-turbulent-fossa.cfapps.io/owner/getAllOwners`)
      .then(res => {
        const persons = res.data;
        this.setState({ owners: persons });
      });

    axios
      .get(`https://petclinic-turbulent-fossa.cfapps.io/pet/getAllPets`)
      .then(res => {
        const pets = res.data;

        this.setState({ pets });
      });
  }

  displayOwnerRows() {
    return this.state.owners.map(owner => {
      return (
        <tr key={owner.id}>
          <th scope="row">{owner.id}</th>
          <td><Link to={"/owners/" + owner.id} >{owner.name}</Link></td>
          <td>{owner.address}</td>
          <td>{owner.city}</td>
          <td>{owner.phoneNumber}</td>
          <td>{this.state.pets.filter(pet => pet.ownerId == owner.id).map(pet => pet.name + "; ")}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <br></br>
        <table className="table table-striped">
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
        <Link to="/owners/addOwner" className="LinkButton">Add owner</Link>
      </div>
    </div>
    );
  }
}

export default DisplayOwners;