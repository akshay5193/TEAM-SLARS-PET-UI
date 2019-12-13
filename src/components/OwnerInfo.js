import React, { Component } from 'react';
import { withRouter} from 'react-router'
import axios from "axios";

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
        <div>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{pet.name} </td>
              </tr>
              <tr>
                <td>Birthdate</td>
                <td>{pet.birthDate}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{pet.petType}</td>
              </tr>
            </tbody>
          </table>   
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <h1>Owner Information</h1>
        <div>
          <table id='ownerInfo'>
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
        <h3>Pet Information</h3>
        <div>
          {this.displayPet()}
        </div>
      </div>
    );
  }
}

export default withRouter(OwnerInfo);