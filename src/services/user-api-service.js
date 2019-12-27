import config from '../config'

const UserApiService = {
    getAllUsers() {
        return fetch(`${config.API_ENDPOINT}/api/users`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getUser(userId) {
        return fetch(`${config.API_ENDPOINT}/api/users/${userId}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postUser(name) {
        return fetch(`${config.API_ENDPOINT}/api/users`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({name: name})
        })
    },
    deleteUser(id) {
        return fetch(`${config.API_ENDPOINT}/api/users/${id}`, {
            method: 'DELETE',
        })
    },
    resetUsers() {
        return fetch(`${config.API_ENDPOINT}/api/users/reset-users`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    moveLine(){
        return fetch(`${config.API_ENDPOINT}/api/users/line`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
};

export default UserApiService;


