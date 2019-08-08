import React, { Component } from 'react';
import {
  Typography, Container,FormControl, Input, InputLabel,FormHelperText, Button, Grid
} from '@material-ui/core';
import AppHeader from '../components/AppHeader';
import swal from 'sweetalert'


class CreateProducts extends Component{
  constructor() {
    super();
    this.state = {
        name: '',
        type: '',
        price:'',
        rating:'',
        warranty_years:'',
        available:false,

      }
    }
      handleChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
        });  
      }
      handleSubmit = ()=>{
        const { name , type, price, rating, warranty_years, available} = this.state;
        let data = {
            name,
            type,
            price,
            rating,
            warranty_years,
            available 
        };
        fetch("http://localhost:5000/addProducts", data).then((response) => {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        }).then((respData) => {
          console.log(respData);
        }).catch((err) => {
          console.log(err);
        });
      }
      componentDidMount() {

      }
      render() {
        return (
        <div>
          <AppHeader/>
            <Container component="main" maxWidth="xs">
              <Typography variant='h3'>Create New Products</Typography>
              <form onSubmit={event => this.handleSubmit(event)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <FormControl>
                  <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name="name" variant="outlined" onChange={this.handleChange}/>
                    <FormHelperText id="my-helper-text">Type the product name</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl>
                    <InputLabel htmlFor='my-type'>Type</InputLabel>
                    <Input id="my-type" aria-describedby="my-helper-text" name="type"  onChange={this.handleChange}/>
                    <FormHelperText id="my-helper-text">Type the product type</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl>
                    <InputLabel htmlFor="my-input">price</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name="price"  onChange={this.handleChange}/>
                    <FormHelperText id="my-helper-text">Type the product price</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl>
                    <InputLabel htmlFor="my-input">rating</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name="rating"  onChange={this.handleChange}/>
                    <FormHelperText id="my-helper-text">Type the product rating</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl>
                    <InputLabel htmlFor="my-input">warranty_years</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name="warranty_years"  onChange={this.handleChange}/>
                    <FormHelperText id="my-helper-text">Type the product warranty_years</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl>
                    <InputLabel htmlFor="my-input">available</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name="available"  onChange={this.handleChange}/>
                    <FormHelperText id="my-helper-text">Type the product available</FormHelperText>
                </FormControl>
                </Grid>
                </Grid>
                    <Button type="submit" color="primary">Create</Button>
            </form>
            </Container>
        </div>
        );
      }

}
export default CreateProducts;
