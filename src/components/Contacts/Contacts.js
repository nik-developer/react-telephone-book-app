import React from "react";
import style from "../Contacts/Contacts.module.css"
import PropTypes from 'prop-types';

const Contacts = ({contacts, onDeleteContact}) => (
    <ul className={style.ContactsList}>
        {contacts.map(({id, name, number}) => (
        <li key={id} className={style.Contacts__item}>
            <p>{name}: {number}</p>
            <button className={style.button} onClick={() => onDeleteContact(id)}>delete</button>
        </li>))}</ul>
)

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }),
    ).isRequired
}

export default Contacts