import React from 'react';
import ReactDOM from 'react-dom';
import Main from './mainbar.jsx';
import DialogExampleSimple from './signup.jsx';
import './index.css';
import axios from 'axios';
import cookie from 'react-cookie';


ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);

ReactDOM.render(
  <DialogExampleSimple/>,
  document.getElementById('app2')
);

axios.interceptors.response.use(function (response) {
    console.log('gggggggggggggggggggggggggggg');
    axios.defaults.headers.common['X-CSRFToken'] = cookie.load('csrftoken');
    console.log("heree goes "+cookie.load('csrftoken'))
    return response;
  }, function (error) {
      //window.location.href = '/nest';
      console.log('brokeeeeeeeee');
      console.log(error);
    return Promise.reject(error);
  })
