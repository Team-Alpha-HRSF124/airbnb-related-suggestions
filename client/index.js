import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import sampleData from './assets/sampleData';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const AppWrapper = () => (
  <Router>
    <Route 
      path='/:homeId'
      render={props => (
          <App 
            sampleData={sampleData}
            requestHomeId={props.match.params.homeId}
          />
        )
      }
    />
  </Router>
);


ReactDOM.render(<AppWrapper />, document.getElementById('related-suggestions'));


