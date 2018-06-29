import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InitalPage from './../src/WelcomeScreen/InitalPage';

ReactDOM.render(<InitalPage />, document.getElementById('root'));
registerServiceWorker();
