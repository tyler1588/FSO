import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const create = newObject => axios.post(baseUrl, newObject)

const deletePerson = id => axios.delete(`${baseUrl}/${id}`)

const personService = {
    getAll,
    create,
    deletePerson
}
export default personService;