import React from "react";
import "semantic-ui-css/semantic.css";
import "./App.css";
import { data } from "./data.js";

function Product(props) {
  return (
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img className="ui tiny image" src={props.product.product_image_url} alt="" />
        </div>
        <div className="content">
        <div className="product-votes">
        <UpAndDownvote upvote={props.upvote} downvote={props.downvote} productId={props.id}/>
        <Counter votes={props.product.votes} />
        </div>

          <h4>
            <a href="#1">
              {props.product.title}
            </a>
          </h4>
         <div className="description">{props.product.description}</div>
          <div className='extra'>
            <Comment className="extra" avatarUrl={props.product.submitter_avatar_url} />
          </div>

        </div>
      </div>

    </div>
  );
}

function Comment(props) {
  return (
    <div className="comment">
      <span>Submitted by:</span>
      <div className="avatar">
        <img src={props.avatarUrl} alt="" className="ui mini spaced image" />
      </div>

    </div>
  );
}

function Counter(props) {
  return <div>{props.votes}</div>
}

function UpAndDownvote(props) {
  return (
    <div>
      <i className='large caret up icon' onClick={()=>props.upvote(props.productId)}/>
      <i className='large caret down icon' onClick={()=>props.downvote(props.productId)}/>
    </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: data };
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(objectId){
    let productsList = this.state.products;

    let element = undefined;
   this.state.products.forEach((elem)=>{


      if(elem.id === objectId){
        element = elem;
      }

   });

   let votes = ++element.votes;
   element.votes = votes;

   let indexOfElemToRemove = productsList.indexOf(element);
   productsList.splice(indexOfElemToRemove,1,element);
   this.setState({products:productsList});

 }

 handleDownvote(objectId){
  let productsList = this.state.products;
  let element = undefined;
   this.state.products.forEach((elem)=>{


      if(elem.id === objectId){
        element = elem;
      }

   });

 let votes = --element.votes;
 element.votes = votes;

 let indexOfElemToRemove = productsList.indexOf(element);
 productsList.splice(indexOfElemToRemove,1,element);
 this.setState({products:productsList});

}
render() {
  const products = this.state.products;
  const sortedProducts = products.sort((a, b) => {
    return b.votes - a.votes;
  });
  const displayProducts = sortedProducts.map((element) =>
    <Product
    product={element}
    key={element.id}
    id={element.id}
    upvote = {this.handleUpvote}
    downvote={this.handleDownvote}
    />
  );

  return (
    <div className="App">
      <div className="App-title">
        <h1 >Popular Products</h1>
      </div>
      <div className="App-list">{displayProducts}</div>
    </div>
  );
}

}

export default App;
