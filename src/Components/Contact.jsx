import React, {Component} from 'react';
import  {connect} from 'react-redux';
import Actions from  '../Actions/Creators';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleNameChange(e){

        this.setState({name: e.target.value});
    }

    handlePhoneChange(e){
        this.setState({phone: e.target.value});
    }

    handleAdd(){
        const payload = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.saveContact(payload);
        this.props.history.push('/');
    }

    render(){
        const {name, phone} = this.state;
        return (
            <div className={'container'}>
                <br/>
                <form className={'form'}>
                    <div className={'form-group'}>
                        <label>
                            Name:
                        </label> &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" required={true} value={name} onChange={this.handleNameChange}/>
                    </div>
                    <div className={'form-group'}>
                        <label>
                            Phone
                        </label> &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type={'text'} value={phone} onChange={this.handlePhoneChange} name={'phone'}/>
                    </div>
                    <div className={'form-group'}>
                        <button type={'button'} className={'btn btn-primary'} onClick={this.handleAdd}>Add</button>
                    </div>
                </form>

                <div className={'container-fluid'}>
                    <p>Name: {this.state.name}</p>
                    <p>Contact: {this.state.phone}</p>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state, ownProp) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        saveContact: (payload) => {
            dispatch(Actions.addContacts(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);