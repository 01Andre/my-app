import React, { Component } from 'react'

let Context = React.createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
            case  'ADD_CONTACT' :
                return {
                    contacts: [action.payload, ...state.contacts]
                }
            default:
                return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                nom: 'John Doe',
                email: 'John@gmail.com',
                tel: "555 - 555 - 555"
            },
            {
                id: 2,
                nom: 'John Doe',
                email: 'John@gmail.com',
                tel: "555 - 555 - 555"
            },
            {
                id: 3,
                nom: 'John Doe',
                email: 'John@gmail.com',
                tel: "555 - 555 - 555"
            }
        ],
        dispatch: action => {
            this.setState(state=> reducer(state, action))
        }
    }
    render() {
        return <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    }
}
export const Consumer = Context.Consumer;