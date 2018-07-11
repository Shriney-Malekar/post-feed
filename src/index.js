import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Setting up base url
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
