import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

Amplify.configure(awsconfig)


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
