export const fetchContacts = () => {
  return fetch('https://candidate-test.herokuapp.com/contacts')
           .then((res) => res.json())
}
