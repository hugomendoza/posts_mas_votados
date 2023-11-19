import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import 'semantic-ui-css/semantic.min.css';
// import store from './store';
// import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <Provider store={store}>
    </Provider>, */}
  </React.StrictMode>,
)
