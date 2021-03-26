const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/people/';
        this.next = null;
        this.previus = null
    }

    async getAllPeople(page) {
        try {

            const response = await this.get(`/?page=${page}`);

            this.next = response.next;
            this.previous = response.previous;
            return {
                next: response.next,
                people: response.results.map(person => this.peopleReducer(person))
            }
        } catch (error) {
            console.log(error)
        }

    }

    async getPerson(name) {
        try {

            const response = await this.get(`/?search=${name}`)
            const [person] = response.results.map(person => this.peopleReducer(person))
            return person ? person : {}
        } catch (error) {
            console.log(error)
        }
    }

    peopleReducer({ name, height, mass, gender, homeworld }) {
        return { name, height, mass, gender, homeworld };

    }
}

module.exports = PeopleAPI;