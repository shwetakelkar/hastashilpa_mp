import React from 'react';
import './SignUp.css'
import AuthHelper from '../../AuthHelper';


class SignUp extends React.Component {
	state = {
		fields:{name:'',confirmPassword:'', email: '', password: ''}
	}

	handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
            fields: {
				...this.state.fields,
            [name]: value
            }
            
        });
      };
    validateForm() {
        return (
          this.state.fields.email.length > 0 &&
          this.state.fields.password.length > 0 &&
          this.state.fields.password === this.state.fields.confirmPassword
        );
    }
    handleFormSubmit = event => {
        event.preventDefault();
        AuthHelper.signUp(this.state.fields).then(user => {
            
			this.setState({fields:{ name:'',email: '', password: '',confirmPassword:'' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})

    }
    
    render(){
    return (
    <div className ="container">
        <div className ="row justify-content-center">
            <div className="card m-4 signUp">
                <form onSubmit={this.handleFormSubmit}>
                <label className ="ml-2 ml-md-5">Name</label>
                        <div className="form-group ml-md-5 pl-md-3" id="name">
                        
                            <input className="ip-cls"
                                autoFocus
                                type="name"
                                name="name"
                                value={this.state.fields.name}
                                onChange={this.handleInputChange}/>
                        </div>
                    <label className ="ml-2 ml-md-5">Email</label>
                        <div className="form-group ml-md-5 pl-md-3" id="email">
                        
                            <input className="ip-cls"
                                type="email"
                                name="email"
                                value={this.state.fields.email}
                                onChange={this.handleInputChange}/>
                        </div>
                    <label className ="ml-2 ml-md-5">password</label>
                    <div className="form-group ml-md-5 pl-md-3" id="password">
               
                        <input className="ip-cls"
                            type='password'
                            name="password"
                            value={this.state.fields.password}
                            onChange={this.handleInputChange}/>
                    </div>
                    <label className ="ml-2 ml-md-5">Confirm Password</label>
                    <div className="form-group ml-md-5 pl-md-3" id="confirmPwd">
                
                    <input className="ip-cls"
                        type='password'
                        name="confirmPassword" 
                        value={this.state.fields.confirmPassword}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="text-center">
                    <button className="btn btn-custom mt-2" disabled={!this.validateForm()}>Sign up</button></div>
                </form>
                
            </div>
        </div>
    </div>
    )
}
}

export default SignUp

