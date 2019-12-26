import config from '../config'

const CatApiService = {
    getAllCats() {
        return fetch(`${config.API_ENDPOINT}/api/cats`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getCat(catId) {
        return fetch(`${config.API_ENDPOINT}/api/cats/${catId}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteCat(id) {
        return fetch(`${config.API_ENDPOINT}/api/cats/${id}`, {
            method: 'DELETE',
        })
    }
};

export default CatApiService;


