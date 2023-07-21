import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the users context
export const UsersContext = createContext();

// Create a custom provider for the users context
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://panorbit.in/api/users.json")
      .then(res => setUsers(res.data.users));
  }, []);

  return (
    <UsersContext.Provider value={users}>
      {children}
    </UsersContext.Provider>
  );
};
