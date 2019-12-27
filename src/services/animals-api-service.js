import config from '../config'

const AnimalsApiService = {
    getAllAnimals() {
        return fetch(`${config.API_ENDPOINT}/api/animals`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
};

export default AnimalsApiService;


