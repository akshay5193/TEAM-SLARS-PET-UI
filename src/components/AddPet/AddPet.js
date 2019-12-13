import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      petName: "",
      birthDate: "",
      type: ""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get(`https://petclinic-turbulent-fossa.cfapps.io/owner/getById/${id}`)
      .then(res => {
        this.setState({ owner: res.data });
      });
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  submitForm = event => {
    event.preventDefault();
    const form = document.getElementById("addPetForm");
    console.log(form);
    this.props.history.push("/owners/" + this.state.owner.id);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <form
                className="form-horizontal"
                onSubmit={this.submitForm}
                id="addPetForm"
              >
                <fieldset>
                  <legend className="text-center header">Add Pet</legend>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      {/* <label>First Name:</label> */}
                      <label></label>
                      <input
                        id="fname"
                        name="ownerName"
                        value={this.state.owner.name}
                        type="text"
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      {/* <label>First Name:</label> */}
                      <input
                        id="fname"
                        name="petName"
                        type="text"
                        placeholder="Pet Name"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      {/* <label>First Name:</label> */}
                      <input
                        name="BirthDate"
                        type="date"
                        placeholder="BirthDate"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        name="type"
                        type="text"
                        placeholder="Type"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12 text-center">
                      <button type="Add" className="btn btn-primary btn-lg">
                        Add
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddPet);
