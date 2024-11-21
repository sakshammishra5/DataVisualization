import { useContext, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import useAuth from './hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './context/AppContext';
import Loader from './components/Loader';


function App() {
  const { isAuthenticated, authloading } = useAuth()
  const {loading}=useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!authloading) {
      if (isAuthenticated) {
        navigate('/')
      }
      else {
        navigate('/login')
      }
    }
  }, [isAuthenticated,loading])


  return (loading==false?<Loader/>:<Dashboard />)
}

export default App
