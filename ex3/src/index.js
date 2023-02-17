import React from 'react';
import ReactDOM from 'react-dom/client';

function calc (a,b){
  return <h2>{a+b}</h2>
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(calc(1,2))

// DIDNT KNOW HOW TO REALLY MAKE THIS INTO ANOTHER GITHUB REPO AND I DELETED THE FIRST EXERCISE, I WILL PUT IT BELOW, ABOVE IS EX 3, BELOW IS EX 1
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const helloworld = <h1>Hello, World!</h1>;

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(helloworld);

