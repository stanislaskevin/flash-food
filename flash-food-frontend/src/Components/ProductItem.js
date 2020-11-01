import React from 'react'
import './ProductItem.css'
import AddIcon from '@material-ui/icons/Add';

function ProductItem({title, url, description, pricez}) {
    return (
        <div className="productItem">
            <img src={url} alt="" />
            <div className="productItem_details">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="productItem_price">
                <p>{pricez}</p>
                <div className="productItem_price_button">
                    <AddIcon style={{fontSize:1+"em", margin:"auto"}}/>
                </div>
            </div>          
        </div>
    )
}

export default ProductItem