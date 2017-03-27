import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
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
   console.log(cookie.load('csrftoken'));
    var email = e.target.email.value;
    var password = e.target.password.value;
   axios.post('http://127.0.0.1:8000/authenticate/', {
    'username': email,
    'password': password,
  }, )
  .then(function (response) {
    console.log("sucess");
  })
  .catch(function (error) {
    console.log(error);
  });
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
        <form onSubmit={this.handlesignup}>
          <TextField value={this.state.email} name="email" className="email" hintText="email" floatingLabelText="email"/>
          <br/>
          <TextField value={this.state.password} name="password" className="password" hintText="password" floatingLabelText="password"/>     
          <br/>
          <FlatButton label="Track it"  type="submit"/>
          <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>
          </form>
      </Dialog>
       
    </div>
    );
  }
}