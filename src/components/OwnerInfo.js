import React, { Component } from 'react';
import { withRouter} from 'react-router'
import axios from "axios";
import {Link} from 'react-router-dom';

class OwnerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      pets: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get(`https://petclinic-turbulent-fossa.cfapps.io/owner/getById/${id}`)
      .then(res => {
        this.setState({ owner: res.data });
      });

    axios
      .get(`https://petclinic-turbulent-fossa.cfapps.io/pet/getAllPets`)
      .then(res => {
        const pets = res.data.filter(pet => pet.ownerId == id);
        this.setState({ pets });
      });
  }

  displayPet() {
    return this.state.pets.map((pet) => {
      return (
        <tr key={pet.id}>
          <td>{pet.name}</td>
          <td>{pet.birthDate.substring(0,10)}</td>
          <td>{pet.petType}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Owner Information</h1>
            <table id='ownerInfo' className="table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{this.state.owner.name} </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td> {this.state.owner.address}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{this.state.owner.city}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{this.state.owner.phoneNumber}</td>
                </tr>
              </tbody>
          </table>   
        </div>
        <div className="container" hidden={this.state.pets.length === 0}>
          <h3>Pet Information</h3>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Pet Name</th>
                <th scope="col">Birth Date</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {this.displayPet()}
            </tbody>
          </table>
        </div>
        <div className="container">
          <Link to={"/owners/" + this.state.owner.id + "/addPet"} className="LinkButton">Add Pet</Link>
          <Link to={"/owners/" + this.state.owner.id + "/addPet"} className="LinkButton">Update Owner</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(OwnerInfo);