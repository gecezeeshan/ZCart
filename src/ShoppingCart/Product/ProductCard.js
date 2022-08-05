import React from 'react'
import { Button } from 'react-bootstrap';

import classes from './Cart.module.css';

import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { checkoutActions } from '../../Store/index';
import { Link } from 'react-router-dom';
function ProductCard(props) {

  const dispatch = useDispatch();

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(checkoutActions.AddItem(event.target.id));
    //props.addItemToCart(event.target.id);
  }
  return (
    <div classidl={" col-sm-3  " + classes.card} style={{ marginBottom: '5px' }} >
      <Card >
        <Card.Body>
          <Card.Title>{props.data.Id}{props.data.name}</Card.Title>
          <Card.Text   >
            <span className='ellipseText' style={{ margin: 'auto' }}>    {props.data.description}</span>
            <span className={'strike'}>${parseFloat(props.data.price) + 10} </span>
            ${props.data.price}
          </Card.Text>
         
          <Button variant="outline-secondary" onClick={clickHandler} id={props.data.Id}>Add to cart</Button>
<br></br>
<Link to={`/ProductDetail/`+props.data.Id} >Details</Link>

        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard