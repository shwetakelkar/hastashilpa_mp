import React from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {

	componentDidMount() {
		this.props.onLogOut()
	}
	
	render() {
		return <div><Redirect to="/signin" /></div>
	}
}

export default Logout