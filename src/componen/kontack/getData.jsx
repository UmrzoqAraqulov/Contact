import React, { Component } from "react";
// import "./getDate.scss"
import iconCall from "../../assets/image/iconCall.png";

export class GetData extends Component {
  render() {
    const {
      img,
      number,
      firstName,
      lastName,
      deleteContact,
      id,
      editContact,
    } = this.props;
    return (
      <div className="card">
        <div className="imgInfo">
          <div
            className="image_contact"
            style={{
              width: `50px`,
              height: "50px",
              borderRadius: "50%",
              background: `url(${img.split(".").length > 2 ? img : iconCall})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="info">
            <h2>
              {firstName} {lastName}
            </h2>
            <p>{number}</p>
          </div>
        </div>
        <div className="btns">
          <a className="call" href="tel:" >📞</a>
          <button
            className="edit"
            onClick={() => {
              editContact(id);
            }}
          >
            edit
          </button>
          <button className="delete" onClick={() => deleteContact(id)}>
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default GetData;
