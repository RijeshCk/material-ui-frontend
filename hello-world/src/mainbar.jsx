import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import axios from 'axios';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import SignupSignin from './signup.jsx';
import GraphDialouge from './graph-dialougebox.jsx';
injectTapEventPlugin();

import {
  blue300,
  pink400,
  teal500,
  grey50,
} from 'material-ui/styles/colors';



const muiTheme = getMuiTheme({
  palette: {
    textColor: blue300,

  },
  appBar: {
    height: 50,
    color:pink400
  },
});

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'',products:[]};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/fetchall/')
  .then(function (response) { 
    this.setState({products:response.data.product_list});
  }.bind(this))
  .catch(function (error) {
    console.log(error);
  });
  }

  handleSubmit(event){
    event.preventDefault();
    const target = event.target
    this.setState({value:target.url});
    const url_from_input = target.url.value 
    const url =  "http://127.0.0.1:8000/product/?url="+url_from_input
    fetch(url,{method:'GET'});
  }


  render(){
    return(
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
    <AppBar title="Track It" iconClassNameRight="muidocs-icon-navigation-expand-more">
    	<div>  
    		<ListItem
		      disabled={true}
		      leftAvatar={
		        <Avatar
		          	color={teal500}
		          	backgroundColor={grey50}
		          	size={40}
		          	className="avatharstyle" >
		            Ri
		        </Avatar>
		      }>
          <SignupSignin/>
			</ListItem>
  		</div>
    </AppBar>
 	<div >
    <form onSubmit={this.handleSubmit}>
    	<TextField value={this.state.url} name="url" className="urlinput" hintText="paste url here" floatingLabelText="url"/>
    	<FlatButton label="Track it" backgroundColor={teal500} type="submit" labelColor={grey50}/>
    </form>   	
  </div>
   <div className="tablediv">
   <Table >
    <TableBody className="listingtable">
      {this.state.products.map((row, index) => (
        <TableRow >
          <TableRowColumn className="imgcell">
            <img className="img" src={row.image}/>
          </TableRowColumn>
          <TableRowColumn className="product_name">{row.name}</TableRowColumn>
          <TableRowColumn>{row.price}</TableRowColumn>
          <TableRowColumn>{row.availability}</TableRowColumn>
          <TableRowColumn>Graph<GraphDialouge/></TableRowColumn>
          <TableRowColumn>Track</TableRowColumn>
        </TableRow>
      ))}

    </TableBody>
  </Table>
  </div>
  </div>
  </MuiThemeProvider>
)
}}
export default Main;