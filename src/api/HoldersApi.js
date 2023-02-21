import { API } from "../config"

// to register user
export const signUpToRegister = ( holdersName, password, email) => {
    let user = {holdersName, password, email }
    return fetch(`${API}/signup`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .catch( err => console.log(err))
}

// to verify email through email confirmation
export const verfiyEmailByEmailConfirmation = ( token ) => {
    return fetch(`${API}/verifyEmail/${token}`,{
        method:"GET",
        headers : {
            "Content-Type":"application/json"
        }
    })
    .then ( res => res.json())
    .catch ( err => console.log(err))
}


