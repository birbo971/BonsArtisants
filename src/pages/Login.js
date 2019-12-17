import React, { Component, Fragment } from 'react';
import {
  Typography,
  Container,
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button 
} from '@material-ui/core';
class Login extends Component{
    constructor(props){
        super(props);
    this.state = {
        email:'',
        password:''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
      componentDidMount() {
      }
      handleChange = (event) =>{
        this.setState({email: event.target.email,
                       password : event.target.password});
      }
      handleSubmit(event) {
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email: email
                ,password: password})
        }).then((respData) => {
            console.log(respData);
          }).catch((err) => {
            console.log(err);
          });
      }
      render() {
        const { isLoading, todos, error } = this.state;
        return (
          <Container maxWidth="sm">
            <Typography  variant="h3" >Login</Typography>
            <form onSubmit={event => this.handleSubmit(event)}>
            <FormGroup>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" name="email" onChange={this.handleChange}/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" name="password" onChange={this.handleChange}/>
                <FormHelperText id="my-helper-text">We'll never share your passsword.</FormHelperText>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
                Login
            </Button>
            </FormGroup>
            </form>
          </Container>
        );
      }

}
export default Login;
