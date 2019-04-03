import Types from './Types';

const addContacts = (payload) => {
  return ({
      type: Types.ADD_CONTACTS,
      payload
  })
};

const deleteContact = (id) => {
    return ({
        type: Types.DELETE_CONTACT,
        id
    });
};

export default {
    addContacts,
    deleteContact
}