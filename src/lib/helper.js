const getUsers = () => {
    const users = localStorage.getItem('users') ?? JSON.stringify([]);
    return JSON.parse(users);
}

const setUser = (user) => {
    return new Promise((resolve, reject) => {
        try{
            const users = getUsers();
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            resolve('User added');
        }
        catch(error) {
            reject(error);
        }
    })
}

const findUser = (condition) => {
    const users = getUsers();
    return users.find((user) => {
        return condition(user)
    })
}


const setLoginInUser = (user) => {
    localStorage.setItem('logged_in_user', JSON.stringify(user));
}

const getLoggedInUser = () => {
    return localStorage.getItem('logged_in_user')
}


export {getUsers, setUser, findUser, setLoginInUser, getLoggedInUser}

