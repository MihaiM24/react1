import React from 'react';
import ReactDOM from 'react-dom/client';

function calc (a,b){
  return <h2>{a+b}</h2>
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(calc(1,2))
