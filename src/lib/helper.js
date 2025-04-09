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
    const user =  localStorage.getItem('logged_in_user')
    return JSON.parse(user)
}

const deleteLoggedInUser = () => {
    localStorage.removeItem('logged_in_user')
}



const getAppointments = () => {
    const users = localStorage.getItem('appointments') ?? JSON.stringify([]);
    return JSON.parse(users);
}

const setAppointment = (appointment) => {
    return new Promise((resolve, reject) => {
        try{
            const appointments = getAppointments();
            appointments.push(appointment);
            localStorage.setItem('appointments', JSON.stringify(appointments));
            resolve('appointment added');
        }
        catch(error) {
            reject(error);
        }
    })
}

const updateAppointment = (appointment_id, data) => {
    return new Promise((resolve, reject) => {
        try {
            const appointments = getAppointments();
            let index = appointments.findIndex(item => item.id === appointment_id)
            console.log(index)
            if(index !== -1){
                let appointment = appointments[index];
                for(const [key, value] of Object.entries(data)){
                    if(key in appointment){
                        appointment[key] = value
                    }
                }
                appointments[index] = appointment;
                localStorage.setItem('appointments', JSON.stringify(appointments));
                resolve('appointment updated');
            }
            else{
                throw new Error("No appointment found with id "+appointment_id);
            }
        }
        catch (error){
            reject(error);
        }
    })
}



export {getUsers, setUser, findUser, setLoginInUser, getLoggedInUser, setAppointment, getAppointments, updateAppointment,deleteLoggedInUser}

