export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;

export const getState = ({ contacts }) => ({ isLoading: contacts.isLoading, error: contacts.error }) 