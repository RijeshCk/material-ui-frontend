import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SwipeableViews from './tab.jsx';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import DjangoCSRFToken from 'django-react-csrftoken';
// import $ from 'jquery';
import cookie from 'react-cookie';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
 const customContentStyle = {
  width: '40%',
  maxWidth: 'none',
};
export default class SignupSignin extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:'',products:[]};
    this.handlesignup = this.handlesignup.bind(this);
  }
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    
  };

  handlesignup(e){
   e.preventDefault();
   
   
   var axios = require("axios");
  var axiosDefaults = require("axios/lib/defaults");
var a=cookie.load('csrftoken');
console.log('ddddddd',document.cookie)
axiosDefaults.xsrfCookieName = "csrftokfffffen";
axiosDefaults.xsrfHeaderName = "csrftoken";
    axiosDefaults.headers.common['csrftoken'] = '5pfaF92GX6shqzZ4d7KL4Qetnpb7KU28';
    let email = this.state.email;
    let password = this.state.password;
   axios.post('http://127.0.0.1:8000/authenticate/', {
    'username': 'rijesh36@gmail.com',
    'password': 'aana',
  }, )
  .then(function (response) {
    console.log("sucess");
  })
  .catch(function (error) {
    console.log(error);
  });
  // fetch('http://127.0.0.1:8000/authenticate/', {
  //           method: 'POST',
  //           headers: {
  //               'X-CSRFToken': window.csrftoken 
  //           },
  //           body:{'username': 'rijesh36@gmail.com',
  //            'password': 'aana',}
  //       }).then(function (response) {
  //           return response.json()
  //       })


    this.setState({open: false});

  }

  render() {
    const actions = [
      
    ];

    return (

      <div>
        <MenuItem primaryText="Signup" onTouchTap={this.handleOpen} />
        <Dialog
          title="Signup"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
           autoScrollBodyContent={true}
        >
        <div>
        
        </div>
        <form onSubmit={this.handlesignup} method='POST'>
        <DjangoCSRFToken/>
          <TextField value={this.state.email} name="email" className="email" hintText="email" floatingLabelText="email"/>
          <br/>
          <TextField value={this.state.password} name="password" className="password" hintText="password" floatingLabelText="password"/>     
          <br/>
          <FlatButton label="Track it"  type="submit" />
          <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>
          </form>
      </Dialog>
       
    </div>
    );
  }
}