import React, { Component } from "react";
import GetData from "./getData";
import "./contact.scss";
import { toast } from "react-toastify";
import AddContact from "./AddContact";
import { v4 as uuidv4 } from "uuid";

export class Contact extends Component {
  state = {
    contact: JSON.parse(localStorage.getItem("contact")) || [
      {
        id: 1,
        img: "",
        firstName: "Diyorbek",
        lastName: "Jurayev",
        number: "+998993698547",
        guruhi: "kursdosh",
      },
      {
        id: 2,
        img: "",
        firstName: "Bilol",
        lastName: "Allayev",
        number: "+998969854717",
        guruhi: "kasbdosh",
      },
      {
        id: 3,
        img: "",
        firstName: "Qodir",
        lastName: "Bobomurodov",
        number: "+998999999999",
        guruhi: "dust",
      },
      {
        id: 4,
        img: "",
        firstName: "Lutfullo",
        lastName: "Araqulov",
        number: "+998977777777",
        guruhi: "qarindosh",
      },
    ],
    selected: "",
    selectedId: "",
  };
  render() {
    const OpenModal = () => {
      this.state.selected=""; 
      this.state.selectedId=""; 
      document.body.classList.toggle("OpenModal");
    };
    const addInfo = (img, firstName, lastName, number, guruhi) => {
      let contact;
      if (!this.state.selected) {
        contact = [
          ...this.state.contact,
          { id: uuidv4(), img, firstName, lastName, number, guruhi },
        ];
        toast.success("Add Contact");
      } else {
        contact = this.state.contact.map((el) => {
          if (el.id === this.state.selectedId) {
            el.id = this.state.selectedId;
            el.img = img;
            el.firstName = firstName;
            el.lastName = lastName;
            el.number = number;
          }
          return el;
        });
        toast.success("Save Contact");
        this.setState.selected = "";
        this.setState.selectedId = "";
      }
      this.setState({ contact });
      localStorage.setItem("contact", JSON.stringify(contact));
    };

    const deleteContact = (id) => {
      let uchirish = window.confirm("Bu kontactni uchirmoqchimis");
      let contact;
      if (uchirish) {
        contact = this.state.contact.filter((el) => el.id !== id);
        console.log(contact, id);
        this.setState({ contact });
        localStorage.setItem("contact", JSON.stringify(contact));
        toast.success("delete Contact");
      }
    };

    const deleteAllContact = () => {
      let deleteAll = window.confirm("Hamma kontaktlarni uchirmoqchimisiz?");
      if (deleteAll) {
        let contact = [];
        this.setState({ contact });
        toast.success("delete all Contact");
      }
    };

    const searchContact = (value) => {
      console.log(value);
      let searchValue = JSON.parse(localStorage.getItem("contact"));
      let contact = searchValue.filter((el) =>
        el.firstName.toLowerCase().includes(value)
      );
      this.setState({ contact });
    };

    // const sortedAlphabet=(value)=>{
    //   if(value==="tugri"){
    //     let contact = this.state.contact.sort((a, b) => a - b);
    //     this.setState({contact});
    //   }
    // }

    const editContact = (id) => {
      OpenModal();
      let selected = this.state.contact.find((el) => el.id === id);
      this.setState({ selected });
      this.setState({ selectedId: id });
    };

    return (
      <div className="container">
        <div className="nav">
          <h1 className="title">Contact</h1>
          <div className="search">
            <input
              type="text"
              placeholder="search..."
              onKeyUp={(e) => searchContact(e.target.value)}
            />
            <span>🔍</span>
          </div>
          <div className="order">
            {/* <select name="sort" id="sort" onChange={(e)=>sortedAlphabet(e.target.value)}>
              <option value="default">Default</option>
              <option value="tugti">A-Z</option>
              <option value="teskari">Z-A</option>
            </select> */}
            <button className="deleteAll" onClick={() => deleteAllContact()}>
              Delete all
            </button>
          </div>
        </div>
        <div className="cards">
          {this.state.contact.map((el) => (
            <GetData
              key={el.id}
              {...el}
              deleteContact={deleteContact}
              editContact={editContact}
            />
          ))}
        </div>
        <div className="add" onClick={OpenModal}>
          +
        </div>
        <div className="content-form">
          <AddContact
            addInfo={addInfo}
            OpenModal={OpenModal}
            selected={this.state.selected}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
