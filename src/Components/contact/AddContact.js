import React, { Component } from 'react'
import { Consumer } from '../../Context'
import uuid from 'uuid'


export default class AddContact extends Component {

    state = {
        nom: '',
        email: '',
        tel: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })
    onSubmit =(dispatch,e) => {
        e.preventDefault()
        let newContact = {
            nom: this.state.nom,
            email: this.state.email,
            tel: this.state.tel,
            id : uuid(),
        }
dispatch({type:'ADD_CONTACT', payload: newContact})
        
this.setState({
                nom : '',
                email : '',
                tel : '',
            })

            this.props.history.push('/')
    }
    render() {

        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Ajouter un Contact</div>
                            <div className="card-body">

                                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text" className="form-control form-control-lg"
                                            name="nom"
                                            placeholder="Doe"
                                            value={this.state.nom}
                                            onChange={this.onChange}>

                                        </input>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="tel">Tel</label>
                                        <input type="text" className="form-control form-control-lg"
                                            name="tel"
                                            placeholder="06-07-29"
                                            value={this.state.tel}
                                            onChange={this.onChange}>

                                        </input>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Mail</label>
                                        <input type="text" className="form-control form-control-lg"
                                            name="email"
                                            placeholder="Doe@gmail.com"
                                            value={this.state.email}
                                            onChange={this.onChange}>

                                        </input>
                                    </div>
                                    <input type="submit"
                                        value="Ajouter un contact"
                                        className="btn btn-primary btn-block"></input>

                                </form>
                            </div>

                        </div>

                    )
                }
                }
            </Consumer>
        )
    }
}
