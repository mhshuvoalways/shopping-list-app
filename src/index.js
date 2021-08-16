import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/style.css';
import './assets/styles/responsive.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from 'easy-peasy';
import store from './store';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

ReactDOM.render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
