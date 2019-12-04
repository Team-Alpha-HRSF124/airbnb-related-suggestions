import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import sampleData from './assets/sampleData';

ReactDOM.render(<App sampleData={sampleData} />, document.getElementById('app'));


