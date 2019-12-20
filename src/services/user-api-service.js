const UserService = {
    saveUser(user) {
        window.localStorage.setItem('userInfo', JSON.stringify(user))
    },
    getUser() {
        try {
            return JSON.parse(window.localStorage.getItem('userInfo'));
        } catch(error){
            console.log(error);
            UserService.clearUser();
        }},
    clearUser() {
        window.localStorage.removeItem('userInfo')
    },
    hasUserInfo() {
        return !!UserService.getUser()
    },
};

export default UserService