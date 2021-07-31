import React from "react";
import data from "../components/data/product_lists.json";
import { Typography } from "@material-ui/core";
import ProductList from '../components/ProductList'
function Home() {
  return (
    <div >
      <Typography style={{ fontWeight: 900 , marginTop: "10px"}} align= "center">
        Add items To your Cart
      </Typography>
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {data.map(function (items, index) {
          return <ProductList items={items} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Home;
