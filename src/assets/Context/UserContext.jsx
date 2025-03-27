import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}
