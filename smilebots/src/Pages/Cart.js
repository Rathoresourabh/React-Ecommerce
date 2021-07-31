import React from 'react'
import ItemList from '../components/ItemList'

function Cart() {
    JSON.parse(localStorage.getItem("productData"))
    return (
        <div className="main">
            {/* {productData && productData.map(function(items,index){
                return <ItemList items={items} key = {index} />;
            })} */}
        </div>
    )
}

export default Cart
