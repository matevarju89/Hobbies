import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Events from './Components/Events';
import Main from './Components/Main';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'


library.add(faChild)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
