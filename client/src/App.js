import React from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import './App.css';
import Settings from './pages/Settings/Settings'
import Search from './pages/Search/Search'
import Navibar from './components/Navibar/Navibar'
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
import BuyerOrders from './pages/BuyerOrders/BuyerOrders'
import OrderReceived from './pages/Seller/OrderReceived';
import ItemEdit from './pages/ItemEdit/ItemEdit';
import NoMatch from './pages/NoMatch/NoMatch';

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
        <Navibar currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={()=><Home currentUser={currentUser} />} />
          <Route exact path="/categories/:name" component={Home} />
          <Route exact path="/settings" component={()=><Settings currentUser={currentUser} />}  />
          <Route exact path="/orderPlace/:title && :id && :itemId" component={(props)=><OrcerPlace {...props} currentUser={currentUser} />} />
          <Route exact path="/displayItem/:id" component={(props)=><DisplayItem {...props} currentUser={currentUser} />}  />
          <Route exact path="/signin" render={(props) => {
						return <Login {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}}  />
          <Route exact path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />
          <Route exact path="/search/:name" component={Search} />
          <Route exact path="/seller" render={(props)=>{
            return <Seller {...props} currentUser={currentUser} />}} />
          <Route exact path="/sellerOrders" render={(props)=>{
          return <OrderReceived {...props} currentUser={currentUser} />}} />
          <Route exact path="/editItms" component={(props)=> {
          return <ItemEdit {...props} currentUser={currentUser} />}}/>
          <Route exact path="/orders" component={(props)=> {
          return <BuyerOrders {...props} currentUser={currentUser} />}}/>
          <Route exact path="/logout" render={(props) => {
						return <Logout onLogOut={this.logOut.bind(this)} />
					}} />
          <Route exact path="/event" render={(props) => {
						return currentUser
							? <Event {...props} />
							: <Redirect to="/signin" />
					}} />
          <Route exact path = "*" component={NoMatch} />
          </Switch>
          <Footer />
      </div>
    </Router>
    )}
  

}

export default App;
