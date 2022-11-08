import axios from "axios";

const instanceContact = axios.create({
  baseURL: 'https://63679219f5f549f052d7e85b.mockapi.io/api/',
});
//получим все контакты
export const getContacts = async () => {
    const { data } = await instanceContact.get('/contacts');
    return data;
};
//добавить контакт
export const addContacts = async data => {
        const { data: result } = await instanceContact.post('/contacts', data);
        return result; 
}
//удалить контакт  
export const deleteContacts = async (id) => {
  const { data } = await instanceContact.delete(`/contacts/${id}`);
        return data;
    }