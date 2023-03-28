import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {Container, Row, Form, FormGroup} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
          <Grid container columnGap={4} justifyContent={'space-evenly'} alignItems={"center"}>
            <Grid lg={7} >
              <Typography variant='h6' mb={4} fontWeight={600}>Billing Information</Typography>
              <Form className='billing__form'>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder='Enter your email' />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder='Phone number' />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Street address' />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='City' />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Postal code' />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Country' />
                </FormGroup>
              </Form>
            </Grid>

            <Grid lg={3}>
              <div className="checkout__cart">
                <Typography variant='h6'>Total Qty: <span>{totalQty}</span></Typography>
                <Typography variant='h6'>Subtotal: <span>${totalAmount}</span></Typography>
                <Typography variant='h6'><span>Shipping: <br /> free shipping</span> <span>$0</span></Typography>
                <Typography variant='h4'>Total Cost: <span>${totalAmount}</span></Typography>
              </div>
              <button className="buy__btn checkout__btn w-100">Place an order</button>
            </Grid>
          </Grid>
      </section>
    </Helmet>
  )
}

export default Checkout