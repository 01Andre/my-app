import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

export default class List extends Component {


    supprime = (id) => {
        const nouveauxContacts = this.state.contacts.filter(contact => contact.id !== id)
        this.setState(
            { contacts: nouveauxContacts }
        )
    }
    render() {
        return (
            <Consumer>

                {value => {
                    return (
                        <React.Fragment>
                            <h1 className="display-4 margin-y-4">Nos contacts</h1>
                            {value.contacts.map(contact => (

                                <Contact
                                    key={contact.id}
                                    id= {contact.id}
                                    nom={contact.nom}
                                    email={contact.email}
                                    tel={contact.tel}
                                    
                                />
                            ))}
                        </React.Fragment>
                    )
                }}


            </Consumer>
        )
    }
}
