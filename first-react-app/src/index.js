import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


const element = <h1>React Page</h1> ;
console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



