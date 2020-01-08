import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const AuthHelper = axios.create()

AuthHelper.getToken = function() {
	return localStorage.getItem('token')
}

AuthHelper.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

AuthHelper.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

AuthHelper.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/user/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

AuthHelper.updateUser = function(id,data){
	return this({ method: 'put', url: '/api/user/email/'+id, data: data })
	.then((serverResponse) => {
		const token = serverResponse.data.token
		if(token) {
			// sets token as an included header for all subsequent api requests
			this.defaults.headers.common.token = this.setToken(token)
			return jwtDecode(token)
		} else {
			return false
		}
	})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
AuthHelper.signUp = function(userInfo) {
	
	return this({ method: 'post', url: '/api/user', data: userInfo})
		.then((serverResponse) => {
			
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

AuthHelper.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
AuthHelper.defaults.headers.common.token = AuthHelper.getToken()
export default AuthHelper