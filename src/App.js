//Feature 1
import React, {Component} from "react";
import Filter from "./Components/filter";
import Products from "./Components/Products";
import data from './data.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    }
  }

  sortProducts = (event) =>{
    const sort = event.target.value;
    this.setState({
      sort,
      products: this.state.products.slice().sort((a,b)=>
        sort === "highest"?
        ((a.price < b.price)? 1:-1)
        :
        sort === "lowest"?
        ((a.price > b.price)?1:-1)
        :
        ((a._id < b._id)?1:-1)

      )
    })
  }
  filterProducts = (event) =>{
    const size = event.target.value;

    if(size === "ALL"){
      this.setState({
        size,
        products: data.products.sort((a,b)=>
        this.state.sort === "highest"?
        ((a.price < b.price)? 1:-1)
        :
        this.state.sort === "lowest"?
        ((a.price > b.price)?1:-1)
        :
        ((a._id < b._id)?1:-1)

      )
      })
    }else{
      this.setState({
        size,
        products: data.products.filter(product=> product.availableSizes.indexOf(size)>=0)
                  .sort((a,b)=>
                  this.state.sort === "highest"?
                  ((a.price < b.price)? 1:-1)
                  :
                  this.state.sort === "lowest"?
                  ((a.price > b.price)?1:-1)
                  :
                  ((a._id < b._id)?1:-1)

                )
      });
    }
    
    
  }
  render() { 
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts} />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              cart items
            </div>
          </div>
        </main>
        <footer>
          All rights is reserved
        </footer>
      </div>
      );
  }
}
 
export default App;

// function App() {
//   return (
//     <div className="grid-container">
//       <header>
//         <a href="/">React Shopping Cart</a>
//       </header>
//       <main>
//         <div className="contnet">
//           <div className="main">

//           </div>
//           <div className="sidebar">

//           </div>
//         </div>
//       </main>
//       <footer>
//         All rights is reserved
//       </footer>
//     </div>
//   );
// }

// export default App;
