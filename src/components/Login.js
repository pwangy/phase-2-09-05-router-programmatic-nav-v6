import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const Login = () => { //! Access the login fn passed as context
  const login = useOutletContext()
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleLogin = e => {
		e.preventDefault()
    login() // call login fn when form is submitted
	}

	return (
		<form onSubmit={handleLogin}>
			<label for='username'>Username</label>
			<div>
				<input
					id='username'
					type='text'
					name='username'
					value={formData.username}
					onChange={handleChange}
				/>
			</div>
			<label for='password'>Password</label>
			<div>
				<input
					id='password'
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
				/>
			</div>
			<button type='submit'>Login</button>
		</form>
	)
}

export default Login
