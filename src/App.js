import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
      filteredProducts: []
    }
  }
  componentWillMount(){
    fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }));
  }
  handleChangeSort(e){
    this.setState({
      sort: e.target.value
    });
    this.listProducts();
  }
  listProducts(){
   
  }
  render(){
    return <div>
        <h1>Ecomm</h1>
        <hr />
        <div>
          <div>
            <Filter 
            size={this.state.size} 
            sort={this.state.sort}
            handleChangeSize={this.handleChangeSize}
            handleChangeSort={this.handleChangeSort}
            count={this.state.filteredProducts.length}
            />
            <hr />
            Products Component
            <Products 
            products={this.state.filteredProducts}
            handleAddToCart = {this.handleAddToCart}
            />  
          </div>
        </div>
      </div>
    
  }
}

export default App;
