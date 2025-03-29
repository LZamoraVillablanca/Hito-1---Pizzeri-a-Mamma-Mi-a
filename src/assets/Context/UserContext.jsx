import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'))
  const [user, setUser] = useState(localStorage.getItem('user') || null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const apiRequest = async (endpoint, method = 'GET', body = null, token = null) => {
    const headers = { 'Content-Type': 'application/json' }
    if (token) headers.Authorization = `Bearer ${token}`

    // Cambiar la URL base para apuntar al backend
    const baseURL = 'http://localhost:5000' // Ajusta este valor si tu backend está en otro puerto
    const response = await fetch(`${baseURL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    })

    if (!response.ok) {
      let errorMessage = 'Error en la solicitud'
      try {
        const errorData = await response.json()
        errorMessage = errorData.message || errorMessage
      } catch {}
      throw new Error(errorMessage)
    }

    return response.json()
  }

  const login = async (email, password) => {
    try {
      setError(null)
      const data = await apiRequest('/api/auth/login', 'POST', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.email)
      setIsAuthenticated(true)
      setUser(data.email)
      navigate('/profile')
    } catch (error) {
      setError(error.message)
    }
  }

  const register = async (email, password) => {
    try {
      setError(null)
      const data = await apiRequest('/api/auth/register/me', 'POST', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.email)
      setIsAuthenticated(true)
      setUser(data.email)
      navigate('/profile')
    } catch (error) {
      setError(error.message)
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  const getProfile = async () => {
    try {
      setError(null)
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No hay token disponible')

      const data = await apiRequest('/api/auth/me', 'GET', null, token)
      setUser(data.email)
      localStorage.setItem('user', data.email)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <UserContext.Provider value={{ isAuthenticated, user, login, register, logout, getProfile, error }}>
      {children}
    </UserContext.Provider>
  )
}
