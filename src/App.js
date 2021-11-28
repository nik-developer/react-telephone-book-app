import React, { Component } from "react";

import Form from "./components/Form/Form";
import Contacts from ".//components/Contacts/Contacts";
import Filter from "./components/Filter/Filter"
import shortid from "shortid";
import style from "./App.module.css"
// import { number } from "prop-types";
// import user from "./user.json";

class App extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    };

  formSubmitHandler = data => {
    const contact = {
  
      id: shortid.generate(),
      name: data.name,
      number: data.number
      
    
    };
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }


 render() {
const {contacts, filter} = this.state;

const normalizedFilter = this.state.filter.toLowerCase();
const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  
    return (
     <div className={style.App}>
            <>
      <h1>Phonebook</h1>
      <Form onSubmit={this.formSubmitHandler}/>
      <h2>Contacts</h2>
      
      <Filter value={filter} onChange={this.changeFilter} />

      <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </>
     </div>

    )
  }

}


export default App;
