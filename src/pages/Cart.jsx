import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const increaseItem = (item) => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
  };

  const decreaseItem = (item) => {
    dispatch(
      cartActions.decreaseItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
      })
    );
  };

  const deleteProduct = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="min-height">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          columns={12}
          columnGap={4}
          rowGap={12}
          pl={6}
          sx={{ pl: { xs: "0" }, pr: { xs: "0" } }}
          pr={6}
        >
          <Grid lg={7} xs={12}>
            {cartItems.length === 0 ? (
              <Typography variant="h6" fontSize={24} textAlign={"center"}>
                No item added to the cart
              </Typography>
            ) : (
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: 18,
                        }}
                        variant="head"
                        align="left"
                      >
                        Image
                      </TableCell>
                      <TableCell
                        variant="head"
                        align="left"
                        sx={{ fontWeight: 600, fontSize: 18 }}
                      >
                        Title
                      </TableCell>
                      <TableCell
                        variant="head"
                        align="left"
                        sx={{
                          fontWeight: 600,
                          fontSize: 18,
                        }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        variant="head"
                        align="left"
                        sx={{
                          fontWeight: 600,
                          fontSize: 18,
                        }}
                      >
                        Qty
                      </TableCell>
                      <TableCell
                        variant="head"
                        align="left"
                        sx={{ fontWeight: 600, fontSize: 18 }}
                      >
                        Delete
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {/* <TableCell component="th" scope="item">
                            {item.name}
                          </TableCell> */}
                        <TableCell variant="body" align="left">
                          <img src={item.imgUrl} alt="" />
                        </TableCell>
                        <TableCell variant="body" align="left">
                          {item.productName}
                        </TableCell>
                        <TableCell variant="body" align="left">
                          ${item.price}
                        </TableCell>
                        <TableCell variant="body" align="left">
                          <i
                            className="fa-solid fa-plus border-radii"
                            onClick={() => increaseItem(item)}
                          ></i>
                          {item.quantity}
                          <i
                            className="fa-solid fa-minus border-radii"
                            onClick={() => decreaseItem(item)}
                          ></i>
                        </TableCell>
                        <TableCell variant="body" align="left">
                          <motion.i
                            whileTap={{ scale: 1.2 }}
                            onClick={() => deleteProduct(item.id)}
                            class="fa-solid fa-trash border-radii"
                          ></motion.i>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Grid>

          <Grid lg={3} xs={12}>
            <div>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Subtotal
                <Typography variant="p" fontSize={22} fontWeight={600}>
                  ${totalAmount}
                </Typography>
              </Typography>
            </div>
            <Typography fontSize={18} mt={2} className="fs-6 mt-2">
              taxes and shipping will calculate in chackout
            </Typography>
            <div>
              <Link to="/checkout">
                <button className="buy__btn w-100">Checkout</button>
              </Link>

              <Link to="/shop">
                <button className="buy__btn w-100">Continue Shopping</button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </section>
    </Helmet>
  );
};

export default Cart;
