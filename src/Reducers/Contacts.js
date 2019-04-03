import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
    contacts: []
});

const contactsAdd = (state, action) => {
    return state.merge({
        contacts: [...state.contacts, action.payload]
    })
};

const contactDelete = (state, action) => {
    const newContacts = [];
    for(let i=0; i<state.contacts.length; i++) {
        if(action.id == i) continue;
        newContacts.push(state.contacts[i]);
    }

    return state.merge({
        contacts: newContacts
    })
};

const ACTION_HANDLERS = {
  [Types.ADD_CONTACTS]: contactsAdd,
    [Types.DELETE_CONTACT]: contactDelete
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);