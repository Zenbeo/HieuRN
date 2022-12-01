import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';

export const UserContext = createContext({
  user: {
    name: '',
    password: '',
  },
  setUser: () => {},
});
export default function ContextProvider({children}) {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
