import User from "../../models/User"
import { LOGIN, REGISTER } from "../actions/authActions"

const initialState = {
    users: [new User('admin@gmail.com', 'admin')],
    loginedEmail: ' '
}

export default (state = initialState,  action) => {
    const {type, user}= action
  switch (type) {
  case LOGIN:
const loginedUser = state.users.find((item)=>item.username ===user.username && item.password ===user.password ) // data truyen vao
    return { ...state, loginedEmail: loginedUser ? loginedUser.username : ' '  }

    case REGISTER:
            return { ...state,users : [...state.users, user] }
  default:
    return state
  }
}
