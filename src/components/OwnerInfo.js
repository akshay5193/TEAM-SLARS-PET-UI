import React, { Component } from 'react';

class OwnerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      favoriteDevLang: '',
      pets: [
        {
        name: 'Simba',
        birthdate: '2018-12-30',
        type: 'cat'
        },
        {
          name: 'Simba2',
          birthdate: '2018-12-31',
          type: 'cat'
        }
      ]
    }
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
                <td>{pet.birthdate}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{pet.type}</td>
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
                  <td>First Name</td>
                  <td>Lihe </td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td> Wang</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Lihe Wang</td>
                </tr>
                <tr>
                  <td>Number</td>
                  <td>1234</td>
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

export default OwnerInfo;