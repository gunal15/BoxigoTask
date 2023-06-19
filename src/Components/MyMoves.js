import React, { useState, useEffect } from "react";
import axios from "axios";

const MyMoves = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://test.api.boxigo.in/sample-data/")
      .then((response) => response.data)
      .then((data) => setGoods(data.Customer_Estimate_Flow));
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <h3 style={{ color: "black" }}>My Moves</h3>
            {goods.map((item) => {
              return (
                <div
                  className="container-fluid border mb-3 border-black p-2"
                  style={{ background: "white" }}
                >
                  <div className="row p-2">
                    <div className="col col-md-4">
                      <h5 style={{ color: "black" }}>From</h5>
                      {item.moving_from}
                    </div>
                    <div className="col col-md-2">
                      <i className="fa-solid fa-circle-arrow-right fa-2x text-danger"></i>
                    </div>
                    <div className="col col-md-4">
                      <h5 style={{ color: "orange" }}>To</h5>
                      {item.moving_to}
                    </div>
                    <div className="col col-md-2">
                      <h5 style={{ color: "orange" }}>Request#</h5>
                      <h4 className="text-danger">{item.estimate_id}</h4>
                    </div>
                  </div>
                  <div className="mt-3 mb-3">
                    <i className="fa-solid fa-house fa-lg text-danger ml-5 mr-2"></i>
                    <span style={{ color: "black" }}>{item.property_size}</span>
                    <i className="fa-solid fa-building fa-lg text-danger ml-5 mr-2"></i>
                    <span style={{ color: "black" }}>{item.new_floor_no}</span>
                    <i className="fa-solid fa-route fa-lg text-danger ml-5 mr-2"></i>
                    <span style={{ color: "black" }}>{item.distance}</span>
                    <i className="fa-solid fa-truck fa-lg text-danger ml-5 mr-2"></i>
                    <span style={{ color: "black" }}>{item.moving_on}</span>
                    <i className="fa-solid fa-pencil ml-5"></i>
                    <i className="fa-solid fa-square-check ml-5 text-danger fa-lg mr-2"></i>
                    <span style={{ color: "black" }}>Is Flexible</span>
                    <a
                      className="btn btn-outline-danger ml-5 px-3"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      style={{ color: "orange" }}
                    >
                      View Move Details
                    </a>
                    <button className="btn btn-danger ml-5 px-3">
                      Quotes Waiting
                    </button>
                    <br />
                    <i className="fa-sharp fa-solid fa-triangle-exclamation  ml-5 fa-xl text-danger mt-2 mr-2"></i>
                    <span className="h5" style={{ color: "black" }}>
                      Disclaimer :
                    </span>{" "}
                    <span className="d-inline" style={{ color: "orange" }}>
                      Please Update your move time before two days of shifting{" "}
                    </span>
                    {/* collapse */}
                    <div className="collapse" id="collapseExample">
                      <div className="d-flex justify-content-between mt-4">
                        <h5 style={{ color: "Black" }}>
                          Additional Information
                        </h5>
                        <button className="btn btn-dark">
                          Edit Additional Info
                        </button>
                      </div>
                      Test Data
                      <div className="d-flex justify-content-between mt-4 mb-2">
                        <h5 style={{ color: "Black" }}>House Details</h5>
                        <button className="btn btn-dark">
                          Edit House Details
                        </button>
                      </div>
                      <h5 className="text-danger" style={{ color: "orange" }}>
                        Existing House Details
                      </h5>
                      <table
                        className="table table-borderless text-center"
                        style={{ color: "Black" }}
                      >
                        <thead>
                          <tr>
                            <th scope="col">Floor No</th>
                            <th scope="col">Elevator available</th>
                            <th scope="col">
                              Distance From Elevator/Staircase to Truck
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.old_floor_no}</td>
                            <td>{item.old_elevator_availability}</td>
                            <td>{item.old_parking_distance}</td>
                          </tr>
                        </tbody>
                      </table>
                      <h5 className="text-danger" style={{ color: "orange" }}>
                        New House Details
                      </h5>
                      <table
                        className="table table-borderless text-center"
                        style={{ color: "Black" }}
                      >
                        <thead>
                          <tr>
                            <th scope="col">Floor No</th>
                            <th scope="col">Elevator available</th>
                            <th scope="col">
                              Distance From Elevator/Staircase to Truck
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.new_floor_no}</td>
                            <td>{item.new_elevator_availability}</td>
                            <td>{item.old_parking_distance}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-between mt-2 mb-2">
                        <h5 style={{ color: "black" }}>Inventory Details</h5>
                        <button className="btn btn-dark">Edit Inventory</button>
                      </div>
                      {/* accordion */}
                      <div
                        className="accordion accordion-flush border"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                              style={{ color: "#DC4C64" }}
                            >
                              Furniture
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body"></div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                              style={{ color: "#DC4C64" }}
                            >
                              Electronics
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body"></div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                              style={{ color: "orange" }}
                            >
                              Vehicle
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body"></div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                              style={{ color: "orange" }}
                            >
                              Boxes/Trolley
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body"></div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                              style={{ color: "orange" }}
                            >
                              Custom Items
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMoves;
