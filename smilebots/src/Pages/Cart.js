import React, { useState } from "react";
import ItemList from "../components/ItemList";
import { Typography, Button, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const [open, setOpen] = React.useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
    emptyCart,
  } = useCart();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if(isEmpty) return <Typography align="center">Your Cart is Empty</Typography>
  return (
    <div>
      <div>
        <Typography
          align="center"
          style={{ marginTop: "20px", fontWeight: "bold", fontSize: "50px" }}
        >
          Cart ({totalUniqueItems}) Total Items: ({totalItems})
        </Typography>
      </div>
      <div>
        {items &&
          items.map(function (item, index) {
            return <ItemList item={item} key={index} />;
          })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClickOpen}
          style={{ color: "white", backgroundColor: "orange" }}
        >
          Place Order
        </Button>
        <Typography
          align="center"
          style={{ marginTop: "20px", fontWeight: "bold", fontSize: "50px" }}
        >
          Total Price: {cartTotal}
        </Typography>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Place Your Order</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="phone"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        >
          <Button
            onClick={handleClose}
            style={{ color: "white", backgroundColor: "orange" }}
          >
            Buy Now 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cart;
