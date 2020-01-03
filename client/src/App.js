import React from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs'
import Search from './pages/Search/Search'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import Home from "./pages/Home/Home";
import Seller from "./pages/Seller/Seller"
import AuthHelper from "./AuthHelper";
import Logout from "./pages/Logout/Logout";
import Event from "./pages/Events/Event"
import DisplayItem from './pages/DisplayItem/DisplayItem';
import OrcerPlace from './pages/OrderPlace/OrderPlace';

class App extends React.Component {
	state = { currentUser: AuthHelper.getCurrentUser() }

	onLoginSuccess(user) {
    this.setState({ currentUser: AuthHelper.getCurrentUser() })
    
	}

	logOut() {
		AuthHelper.logOut()
		this.setState({ currentUser: null })
	}

  render(){
    const { currentUser } = this.state
		return (
  
    <Router>
      <div>
        <Navbar currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={()=><Home currentUser={currentUser} />} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/orderPlace/:title && :id" component={(props)=><OrcerPlace {...props} currentUser={currentUser} />} />
          <Route exact path="/displayItem/:id" component={DisplayItem} />
          <Route exact path="/signin" render={(props) => {
						return <Login {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}}  />
          <Route exact path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/seller" render={(props)=>{
            return <Seller {...props} />}} />
          <Route exact path="/logout" render={(props) => {
						return <Logout onLogOut={this.logOut.bind(this)} />
					}} />
          <Route exact path="/event" render={(props) => {
						return currentUser
							? <Event {...props} />
							: <Redirect to="/signin" />
					}} />
          </Switch>
          <Footer />
      </div>
    </Router>
    )}
  

}

export default App;
