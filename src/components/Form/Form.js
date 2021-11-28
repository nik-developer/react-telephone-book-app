import React, { Component } from "react";
import shortid from "shortid";
import style from "../Form/Form.module.css"

// import PropTypes from "prop-types";
 
const INITIAL_STATE = {
    name: '',
    number: '',
}

class Form extends Component {
    state = {
    ...INITIAL_STATE
      };

      nameInputId = shortid.generate();
      numberInputId = shortid.generate();

    handleChange = e => {
        const {name, value} = e.currentTarget;

        this.setState({ [name]: value});

    
    }
    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);
        
        this.reset();
        
    };
    reset = () => {
        this.setState({ ...INITIAL_STATE });
      };
    render () {
        return (
    <div>
            <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}> 
        <h4>Name</h4>
        <input onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required 
            id={this.nameInputId}
            className={style.searchInput}

            />
            </label> 
        <label htmlFor={this.numberInputId}>
        <h4>Number</h4>
        <input onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}

            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required 
            id={this.numberInputId}
            className={style.searchInput}
            />
            </label>
            <button className={style.button} type="submit">Add contact</button>
        </form>
    </div>
    )
}
}
export default Form;
