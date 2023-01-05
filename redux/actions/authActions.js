import User from "../../models/User"

export const LOGIN= 'LOGIN'
export const REGISTER = 'REGISTER'
export const login = (username,password)=>{
    return { type : LOGIN, user:  new User( username,password )}
}
export const register = (username,password)=>{
    return { type : REGISTER, user:  new User( username,password )}
}