import { useState, useEffect } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () =>  {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  useEffect(() => {
    if (isLoggedIn) { //render Home if logged in
      navigate('/')
    } else { // render login prompt if logged out
      navigate('/login')
    }
  }, [isLoggedIn])

	return (
		<div className='app'>
      {/* users have to be logged in to see pages on the site */}
      {isLoggedIn ? <NavBar logout={logout}  /> : <Navigate to="/login" />}
			<Outlet context={login}/>
		</div>
)}

export default App
