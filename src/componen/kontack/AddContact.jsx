import React, { Component, createRef } from "react";
import iconContact from "../../assets/image/iconCall.png";

export class AddContact extends Component {
  // state = {
  //   changeGuruh: "",
  // };
  rasmRef = createRef();
  firstNameRef = createRef();
  lastNameRef = createRef();
  numberRef = createRef();
  render() {
    // let guruh = ["qarindosh", "hamkasb", "kursdosh", "kasbdosh", "dust"];
    const { OpenModal, addInfo, selected } = this.props;
    this.rasmRef.current && (this.rasmRef.current.value = selected.rasm);
    this.firstNameRef.current &&
      (this.firstNameRef.current.value = selected.firstName);
    this.lastNameRef.current &&
      (this.lastNameRef.current.value = selected.lastName);
    this.numberRef.current && (this.numberRef.current.value = selected.number);
    // this.state.changeGuruh && (this.state.changeGuruh = selected.guruh);

    const submitNewContact = (e) => {
      e.preventDefault();
      addInfo(
        this.rasmRef.current.value,
        this.firstNameRef.current.value,
        this.lastNameRef.current.value,
        this.numberRef.current.value
        // this.state.changeGuruh
      );
      this.rasmRef.current.value = "";
      this.firstNameRef.current.value = "";
      this.lastNameRef.current.value = "";
      this.numberRef.current.value = "";
      OpenModal();
    };
    // const changeGuruhValue = (value) => {
    //   console.log(value);
    //   this.setState({ changeGuruh: value });
    //   console.log(this.state.changeGuruh);
    // };
    return (
      <form className="formAddContact" onSubmit={submitNewContact}>
        <p className="close" onClick={() => OpenModal()}>
          x
        </p>
        <img src={iconContact} alt="" />
        <input
          required
          type="text"
          ref={this.rasmRef}
          id="image"
          placeholder="img url"
        />
        <label htmlFor="firstName">FirstName</label>
        <input required type="text" id="firstName" ref={this.firstNameRef} />
        <label htmlFor="lastName">LastName</label>
        <input required type="text" id="lastName" ref={this.lastNameRef} />
        <label htmlFor="PhoneNumber">PhoneNumber</label>
        <input required type="text" id="PhoneNumber" ref={this.numberRef} />
        {/* <select
          name="guruh"
          id="guruh"
          // onChange={(e) => changeGuruhValue(e.target.value)}
          ref={this.guruhRef}
        >
          {guruh.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select> */}
        <button className="addNewContact" type="submit">
          {selected ? "Save" : "Add Contact"}
        </button>
      </form>
    );
  }
}

export default AddContact;
