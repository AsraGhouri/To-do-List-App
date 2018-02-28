import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
//import SignUp from './signUp';
ReactDOM.render(<App/>, document.getElementById('root'));
/* <Router history={customHistory}>
    <div>
        <Route path="/login" component={Login}/>
        <Route path="/app/home" component={Home}/>
        <Redirect from="/" to="/signUp"/>
    </div>
</Router>
firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('iser has signed in or up', user);
    } else {
        console.log('user has signed out or still needs to sign in.')
    }
}) */
registerServiceWorker();
