import React, { Component } from 'react';
import { Consumer } from '../../Context';

export default class Contact extends Component {
    state = {
        show: false
    }


    supprimerContact = (id, dispatch) => {
dispatch({type: 'DELETE_CONTACT', payload:id})
    }

    montrerContact = (id, dispatch) => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <Consumer>
                {
                    value => {
                        return (
                            <div className="card card-body text-center">
                                <h4>{this.props.nom}&nbsp;<i style={{ cursor: 'pointer' }} className={this.state.show ? ('fas fa-sort-up') : ('fas fa-sort-down')}
                                    onClick={this.montrerContact}
                                ></i>
                                    <i className='fas fa-times ml-2 ' style={{ cursor: "pointer", float: 'right', color: "red" }} onClick={() => this.supprimerContact(this.props.id, value.dispatch)}></i>
                                </h4>
                                {this.state.show ? (<ul className="card card-body mb-3">

                                    <li className="list-group-item">Email: {this.props.email}</li>
                                    <li className="list-group-item">Téléphone: {this.props.tel}</li>
                                </ul>) : null}

                            </div>
                        )
                    }
                }

            </Consumer>
        )
    }
}
