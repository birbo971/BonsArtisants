import React, { Component, Fragment } from 'react';
import {
  Typography,Container
} from '@material-ui/core';
class Home extends Component{
    state = {
        todos: []
      }
      componentDidMount() {
        this._getAllProducts();
      }
        _getAllProducts = () =>{
          fetch(`http://192.168.15.244:5000/products`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ todos: data })
            console.log(this.state.todos)
          })
          .catch(console.log)
        }
      render() {
        const { isLoading, todos, error } = this.state;
        return (
          <Container maxWidth="md">
            <Typography  variant="h3" >Get Products</Typography>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              todos.map(user => {
                const { _id, name, type, price, rating, warranty_years, available } = user;
                return (
                  <div key={_id}>
                    <p>Name: {name}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Warranty years: {warranty_years}</p>
                    <p>Available: {available}</p>
                    <hr />
                  </div>
                );
              })
            ) : (
              <h3>Loading...</h3>
            )}
          </Container>
        );
      }

}
export default Home;
