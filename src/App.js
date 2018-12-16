import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import userList from './users.json';
import Protected from './Projected';
import Public from './Public';

const user = userList[0] 
const admin = userList[1] 
const mod = userList[2] 


const store = {};

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  
  login = (person) => {
      fakeAuth.authenticate(() => {
      this.setState( () => ({
        redirectToReferrer: true
      }))
    })
    store.person = person;
  }

  render() {
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if( redirectToReferrer === true ) {
      return (
        <Redirect to= '/' />
      )
    }
    return (
      <div>
        <p>You must log in to view this page at { from.pathname }</p>
        <button className="button" onClick={this.login.bind(this, user)}>Login as student </button> -|- 
        <button className="button" onClick={this.login.bind(this, mod)}>Login as teacher </button> -|- 
        <button className="button" onClick={this.login.bind(this, admin)}>Login as admin </button>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, data, ...rest }) => (
  <Route {...rest} render = {(props) => (
    fakeAuth.isAuthenticated === true
    ? 
    <Component {...props} data={data} { ...rest}/>
    :
    <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }} />
  )}/>
)

const AuthButton = withRouter(( {history} ) => (
  fakeAuth.isAuthenticated === true
  ? 
  <p>
    Welcome! <button className="button" onClick={() => {
      fakeAuth.signout(() =>  {
        history.push('/')
      })
      }} >Sign Out</button>
  </p>
  :
  <p>
    You are not logged in.
  </p>
))



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <AuthButton />
          <ul>
            <li><Link to='/public'>Public Page</Link></li>
            <li><Link to='/protected'>Protected Page</Link></li>
          </ul>
        <Route path='/public' component={Public} />
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/protected' component={Protected} data={store} />
      </div>
      </Router>

    );
  }
}

export default App;
