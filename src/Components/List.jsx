import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from  '../Actions/Creators';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: this.props.contacts
        };

        this.renderContacts = this.renderContacts.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({contacts: nextProps.contacts});
        this.renderContacts();
    }

    handleDelete = (e) => {
        this.props.deleteContact(parseInt(e.target.id));
    };

    renderContacts(){
        const {contacts} = this.state;
        let i = -1;
        return contacts.map(contact => {
            ++i;
            return (
                <tr key={i}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <button key={i} id={i} onClick={this.handleDelete} className={'btn btn-danger'}>Delete</button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className={'container'}>
                <br/>
                <Link to={'/add'} className={'btn btn-lg btn-block btn-success'}>Click Here to Add Contacts</Link>
                <br/>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderContacts()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        contacts: state.Contacts.contacts
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteContact: (id) => {
            dispatch(Actions.deleteContact(id));
        }
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(List);