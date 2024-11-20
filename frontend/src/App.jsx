import { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import useAuth from './hooks/useAuth'
import { useNavigate } from 'react-router-dom'


function App() {
  const { isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        navigate('/')
      }
      else {
        navigate('/login')
      }
    }
  }, [isAuthenticated,loading])


  return (<Dashboard />)
}

export default App
