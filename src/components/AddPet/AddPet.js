import React, { Component } from "react";

class AddPet extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <form className="form-horizontal" method="post">
                <fieldset>
                  <legend className="text-center header">Add Pet</legend>

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
                        placeholder="Owner"
                        className="form-control"
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
                        id="pname"
                        name="name"
                        type="text"
                        placeholder="Pet Name"
                        className="form-control"
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
                        id="bdate"
                        name="name"
                        type="date"
                        placeholder="BirthDate"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <select className="form-control" id="pet_type">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                      </select>
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

export default AddPet;
