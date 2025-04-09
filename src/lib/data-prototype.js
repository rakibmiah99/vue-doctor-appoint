import {toast} from "vue3-toastify";

const CheckData = (data, keys, resolve, reject) => {
    try{
        const accessible = {}
        keys.forEach((key) => {
            if(!data.hasOwnProperty(key)) {
                throw new Error(`Invalid data type ${key}`);
            }
            accessible[key] = data[key];
        })

        resolve(accessible)
    }
    catch (error){
        reject(error)
    }
}


const UserData = (data) => {
    return new Promise( (resolve, reject) => {
        const keys = ['name', 'email', 'password', 'role', 'secure_key'];
        CheckData(data, keys, resolve, reject);
    }).then(user => {
        return user;
    }).catch(error => {
        toast.error(error)
    })
}


const AppointmentData = (data) => {
    return new Promise( (resolve, reject) => {
        const keys = ['id','name', 'email', 'phone', 'doctor', 'date', 'time', 'reason', 'status', 'comment'];
        CheckData(data, keys, resolve, reject);
    }).then(appointment => {
        return appointment;
    }).catch(error => {
        toast.error(error)
    })
}





export {UserData, AppointmentData}