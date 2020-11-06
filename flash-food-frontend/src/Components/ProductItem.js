import React from 'react'
import './ProductItem.css'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

function ProductItem({product}) {
    return (
        <div className="productItem">
            <img src={product.url} alt="" />
            <div className="productItem_details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className="productItem_price">
                <p>{product.pricez}</p>
                <Link to={`/productdetail/${product._id}`}  
                    className="productItem_price_button"
                >
                    <AddIcon  style={{fontSize:1+"em", margin:"auto"}}/>
                </Link>
            </div>          
        </div>
    )
}

export default ProductItem
//http://localhost:3000/productdetail/:5f9efe37264f5d150fd60324
//http://localhost:3000/productdetail/:5f9efe37264f5d150fd60322
/**
 * <Link to={`/productdetail/:${_id}`} className="productItem_price_button">
            <h1>test</h1>
        </Link>)
    }
 */