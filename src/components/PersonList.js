import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
    pets: [],
    petnames: [],
    empty: []
  };

  componentDidMount() {
    axios
      .get(`https://petclinic-turbulent-fossa.cfapps.io/owner/getAllOwners`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });

    axios
      .get(`https://petclinic-turbulent-fossa.cfapps.io/pet/getAllPets`)
      .then(res => {
        const pets = res.data;
        this.setState({ pets });
      });
  }

  editPerson = id => {
    console.log("update " + id);
  };

  petdetails = id => {
    var temp = [];
    this.state.pets.map(pet =>
      pet.ownerId === id ? temp.push(pet.name + " ") : null
    );

    console.log("list details --" + this.state.petnames);
    return temp;
  };

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
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(o => (
              <tr scope="row" key={o.id}>
                <td>{o.id}</td>
                <td>{o.name}</td>
                <td>{o.address}</td>
                <td>{o.city}</td>
                <td>{o.phoneNumber}</td>
                <td>{this.petdetails(o.id)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.editPerson(o.id)}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
