import './bootstrap';
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './components/App';
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onscroll=function(){
    const header=document.querySelector('header');
    const fixnav=header.offsetTop;
    
    if(window.pageYOffset>fixnav){
      header.classList.add('navbar-fixed');
    }else{
      header.classList.remove('navbar-fixed');
    }
  }