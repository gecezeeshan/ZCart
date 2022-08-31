import {React, useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import classes from './Cart.module.css';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ShoppingCartData from '../ShoppingCartData.js'
import {Link } from 'react-router-dom';
import axios from 'axios';
function ProductDetail() {
  const [productData, setProductData] = useState(null);

  const baseURL = "http://localhost:5000/";
    const params = useParams();
    //const [product,setProduct] = useState([]);

    useEffect(() => {      
      axios.get(baseURL+'CartProducts').then((response) => {          
          setProductData(response.data);
      });
    }, []);
    if (!productData) return null;
    var product ;
    const GetProduct = () => {
        var _products = ShoppingCartData.CartRepository.CartProducts;      
        product = _products.filter(p => params.id == p.Id.toString())[0];             
       // setProduct(_product);
    }
    GetProduct();

  return (
    <div classidl={" col-sm-3  " + classes.card} style={{ marginBottom: '5px' }} >
      <Card >
        <Card.Body>
          <Card.Title>{product.Id}{product.name}</Card.Title>
          <Card.Text   >
            <span className='ellipseText' style={{ margin: 'auto' }}>    {product.description}</span>
            <span className={'strike'}>${parseFloat(product.price) + 10} </span>
            ${product.price}
          </Card.Text>
          {/* <Button variant="outline-secondary" id={product.Id}>Add to cart</Button> */}
          <Link to={`/Products`}>Back</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductDetail