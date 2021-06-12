import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import GroupA from './components/pages/GroupA';
import GroupB from './components/pages/GroupB';
import GroupC from './components/pages/GroupC';
import Feedback from './components/pages/Feedback';


function App() {
  return (
    <div className="app">
      
      <Router>     
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/GroupA.js" component={GroupA} />
          <Route path="/GroupB.js" component={GroupB} />
          <Route path="/GroupC.js" component={GroupC} />
          <Route path="/Form/Feedback.js" component={Feedback} />
        </Switch>
        
      </Router>
  
    
    </div>
    
  );
};

export default App;
