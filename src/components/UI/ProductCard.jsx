import React from 'react'
import {motion} from 'framer-motion'
import '../../styles/product-card.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import {  toast } from 'react-toastify';
import { Box, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const ProductCard = ({item}) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl
    }))

    toast.success('product added successfully')
  }
  return (
    <Grid item lg={2.4} md={3} mb={2} pl={2}>
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{scale: .9}} src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product__info'>
          <Typography variant='h6' lineHeight={1.2} fontWeight={500} className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></Typography>
          <span>{item.category}</span>
        </div>
        <Box sx={{
          pr: 2,
          pb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }} className="product__card-bottom">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
            <AddIcon />
          </motion.span>
        </Box>
      </div>
    </Grid>
  )
}

export default ProductCard