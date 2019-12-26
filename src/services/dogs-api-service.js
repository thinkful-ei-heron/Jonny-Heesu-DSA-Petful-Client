import config from '../config'

const DogApiService = {
    getAllDogs() {
        return fetch(`${config.API_ENDPOINT}/api/dogs`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getDog(dogId) {
        return fetch(`${config.API_ENDPOINT}/api/dogs/${dogId}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteGoal(id) {
        return fetch(`${config.API_ENDPOINT}/api/dogs/${id}`, {
            method: 'DELETE',
        })
    }
};

export default DogApiService;


