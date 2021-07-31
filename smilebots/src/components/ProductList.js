import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActions, Divider, IconButton } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import Data from "../components/data/product_lists.json"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
    minWidth: "300px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  customAction: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function CourseCard({ items }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let history = useHistory();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={items.imageURL}
        title={items.brandName}
        onClick={handleClickOpen}
        aria-labelledby="form-dialog-title"
        id="form-dialog-title"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>
        <DialogTitle id="form-dialog-title">{items.name}</DialogTitle>

        <DialogContent dividers>
          <DialogContentText>
            Brand: {items.brandName} | Category: {items.category} |{" "}
            <span style={{ color: "orange" }}> RATING ⭐: {items.rating}</span>
          </DialogContentText>
          <DialogContentText>
            Seller: {items.sellerName} |{" "}
            <span
              style={{ color: "Black", fontWeight: "bold", fontSize: "20px" }}
            >
              {" "}
              PRICE 💸 : {items.price}
            </span>
            <br></br>
            <span
              style={{ color: "Black", fontWeight: "bold", fontSize: "20px" }}
            >
              {" "}
              DISCOUNT 💰 : {items.discount}
            </span>
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions className={classes.customAction}>
          <img src={items.imageURL} alt={items.brandName} />
        </DialogActions>
        <DialogContentText>
          Quantity Default : 1 | You can add more on Checkout Page.
        </DialogContentText>

        <DialogActions className={classes.customAction}>
          <Button style={{ color: "white", backgroundColor: "orange" }} onClick={()=> { 
              localStorage.setItem("productData" , Data)

          }}>
            🛒 Add To Cart
          </Button>
          <Button style={{ color: "white", backgroundColor: "orange" }} onClick={()=> { 
              history.push('/cart')
              
          }}>
            🛒 Go To Cart
          </Button>
        </DialogActions>
      </Dialog>
      <CardHeader title={items.category} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {items.Description}
        </Typography>
        <Divider />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          {items.price}
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
