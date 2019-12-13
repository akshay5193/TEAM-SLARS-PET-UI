import React, { Component } from "react";

class AddOwner extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <form className="form-horizontal" method="post">
                <fieldset>
                  <legend className="text-center header">Add Owner</legend>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      {/* <label>First Name:</label> */}
                      <input
                        id="fname"
                        name="name"
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="lname"
                        name="name"
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="street1_id"
                        name="street1"
                        type="text"
                        placeholder="Street Address, P.O box , company name, c/o"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="street2_id"
                        name="street2"
                        type="text"
                        placeholder="Apartment, suite, unit, building, floor etc"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="City"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <select class="form-control" id="state_id">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        placeholder="ZipCode"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-phone-square bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-envelope-o bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email Address"
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

export default AddOwner;

