import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'

const obj = {name:"Kabsah", price:"100SR", img: "kabsah.jpg"}
let p =obj.img
ReactDOM.render(
  <React.StrictMode>    
    <App />
<h1>{obj.name}</h1>
<h3>{obj.price}</h3>
<img src= "/images/kabsah.jpg" id="imgID"/> 

  </React.StrictMode>,
  document.getElementById('root') //had some issues trying to laoad the image but finally I found help at 
                                  // https://www.youtube.com/watch?v=taMJct5oeoI&ab_channel=EsterlingAccime
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
