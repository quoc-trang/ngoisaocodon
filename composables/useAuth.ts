import { ref } from 'vue'

interface User {
  email: string
  token?: string
}

export const useAuth = () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      user.value = { email: data.email, token: data.token }
      isAuthenticated.value = true
      localStorage.setItem('token', data.token)
      return true
    }
    catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
    localStorage.removeItem('token')
  }

  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (token) {
      // You might want to validate the token with your backend here
      isAuthenticated.value = true
      // For now, we'll just set a placeholder email
      user.value = { email: 'user@example.com', token }
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth,
  }
}
