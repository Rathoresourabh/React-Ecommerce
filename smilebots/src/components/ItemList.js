import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    width: "70%",
    margin: "50px 0px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    color: "white",
    backgroundColor: "orange",
  },
});

export default function ItemList({ items }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {items.name} | {items.brandName}
          </Typography>
          <Typography variant="h5" component="h2">
            PRICE: ${items.price}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Brand: {items.brandName}
          </Typography>
          <img src={items.imageURL} alt={items.productId} />
        </CardContent>
        <CardActions>
          <IconButton aria-label="add" className={classes.button}>
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" className={classes.button}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
