import React from "react";
import './Login.css'
import AuthHelper from "../../AuthHelper";



class Login extends React.Component {
	state = {
		fields: {type:'input', email: '', password: ''}
	}
  

  validateForm() {
    return this.state.fields.email.length > 0 && this.state.fields.password.length > 0;
  }

  handleInputChange=(event) =>{
		this.setState({
			fields: {
				...this.state.fields,
				[event.target.name]: event.target.value
			}
		})
	}

   handleSubmit=(event) =>{
    event.preventDefault();
    AuthHelper.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
      }
      else{
        alert("User dosn't exist. Please sign up")
      }
		})
    
  }
  showPassword(e){
    this.setState( { showpassword: !this.state.showpassword }) // this is to change checkbox state
    this.setState({fields: { type: this.state.fields.type === 'password' ? 'text' : 'password' }}) // this is to change input box type text/password change
  }
  
 render(){
  return (
    <div className ="container">
        <div className ="row justify-content-center">
        <div className="card login-card m-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group ml-2 mt-3" id="email">
            <label className ="mr-5">Email</label>
            <input 
                autoFocus
                type="email"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleInputChange}
            />
            </div>
            <div className="form-group ml-2 mt-3" id="password">
            <label className ="mr-3">Password</label>
            <input
                value={this.state.fields.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
            />  
            </div>
            <div className="text-center">
            <button className='btn btn-custom mx-auto mt-3' disabled={!this.validateForm()} type="submit">
                Login
            </button></div>
            </form>
        </div>
        </div>
        
        <div className="row justify-content-center">
            <h5> New Customer</h5>
        </div>
        <div className = "row justify-content-center">
            <a href="/signup" className='btn btn-signUp m-3' type="submit">Create an account</a>
        </div>
       
    </div>
  )};
}

export default Login
