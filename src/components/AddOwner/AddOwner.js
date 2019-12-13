import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { withRouter} from 'react-router'

class AddOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addUpdateOwner: 'Add Owner',
      owner: {
        id: '154',
        name: '',
        address: '',
        city: '',
        phoneNumber: ''
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if(id != '') {
      this.setState({addUpdateOwner: 'Update Owner'});
      console.log(id);
      axios
        .get(`https://petclinic-turbulent-fossa.cfapps.io/owner/getById/${id}`)
        .then(res => {
          this.setState({ owner: res.data });
        });
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    const form = document.getElementById('AddOwnerForm');
    console.log(form);
    this.props.history.push("/owners/" + this.state.owner.id);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <form className="form-horizontal" onSubmit={this.submitForm} id="AddOwnerForm">
                <fieldset>
                  <legend className="text-center header">{this.state.addUpdateOwner}</legend>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      {/* <label>First Name:</label> */}
                      <label>Name:</label>
                      <input
                        
                        name="name"
                        type="text"
                        placeholder={this.state.owner.name}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                    <label>Address:</label>
                      <input
                      
                        name="address"
                        type="text"
                        placeholder={this.state.owner.address}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <label>City:</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder={this.state.owner.city}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-phone-square bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <label>phone:</label>
                      <input
                        name="phone"
                        type="text"
                        placeholder={this.state.owner.phoneNumber}
                        className="form-control"
                      />
                    </div>
                  </div>

             

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-pencil-square-o bigicon"></i>
                    </span>
                    <div className="col-md-8"></div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 text-center">
                      <button type="Add" className="btn btn-primary btn-lg">
                        {this.state.addUpdateOwner}
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

export default withRouter(AddOwner);

