import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import FilterableProductTable from './FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('root'));
registerServiceWorker();
