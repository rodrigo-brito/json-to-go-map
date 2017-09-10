import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import "./style/normalize.css";
import "./style/index.css";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
