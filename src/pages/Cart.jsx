import React from 'react';
import '../Styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return ( 
   <Helmet title='Cart'>
      <CommonSection title='Shopping Cart'/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? (
                  <h2 className='fs-4 text-center'>No items added to the cart</h2>
                ) : (
                  <table className="table bordered">
                <thread>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thread>

                <tbody>
                 {
                  cartItems.map((items,index)=>(
                   <Tr items={items} key={index}/>
                  ))
                 }
                </tbody>
              </table>
            )}
            </Col>

            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>
              <p className='fs-6 mt-2'>taxes and shipping will calculate at checkout</p>
              <div>
                <button className="buy__btn w-100">
                  <Link to='/checkout'>
                    Checkout
                  </Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to='/shop'>
                    Continue Shopping
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
  )
}

const Tr = ({items})=>{

  const dispatch = useDispatch()

  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(items.id))
  }
  return  <tr>
  <td>
    <img src={items.imgUrl} alt="" />
  </td>
  <td>
    {items.productName}
  </td>
  <td>
    ${items.price}
  </td>
  <td>{items.quantity}</td>
  <motion.td whileTap={{scale:1.2}}>
    <i onClick={deleteProduct} class="ri-delete-bin-line"></i>
  </motion.td>
</tr>
}

export default Cart