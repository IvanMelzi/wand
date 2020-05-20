import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LoginScreen from './containers/LoginScreen/LoginScreen';
import SignUpScreen from './containers/SignUpScreen/SignUpScreen';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">
            Wand
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Route path="/" exact component={ LoginScreen } />
        <Route path="/sign" component={ SignUpScreen } />
      </main>
    </div>
  );
}

export default App;
