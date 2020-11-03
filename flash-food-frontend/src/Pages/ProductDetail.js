import React from 'react'
import './ProductDetail.css'
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {Link} from "react-router-dom";

function ProductDetail() {
    return (
        <div className="productDetail">
            <div className="productDetail_header">
                <Link className="back" to="/">
                    <HighlightOffIcon />
                </Link>
                <img src="https://i.f1g.fr/media/eidos/805x453_crop/2017/07/12/XVM883e9268-664e-11e7-8d20-2d6ece4fe616.jpg" alt="" />
            </div>
            <div className="productDetail_title">
                <h3>Expresso</h3>
                <h3 className="productDetail_title_price">24.60</h3>
            </div>

            <div className="productDetail_body">
                <div className="productDetail_description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor ac justo id dictum. Cras convallis sapien vitae metus scelerisque, vitae accumsan ante accumsan. Nullam fermentum est id justo elementum, id pretium mi gravida. Duis orci tellus, eleifend sit amet vestibulum mollis, laoreet eu purus. D</p>
                </div>
                <div className="productDetail_cup_size_title">
                    <h4>Cup Size</h4>
                    <span>optional</span>
                </div>
                <div className="productDetail_cup_size_body">
                    <button className="productDetail_cup_size_selection">
                        <LocalCafeIcon style={{fontSize:2+"em", color:"gray", margin:"auto"}}/>
                        <p>Regular</p>
                        <span>0.00</span>
                    </button>
                    <button className="productDetail_cup_size_selection">
                        <LocalCafeIcon style={{fontSize:2+"em", color:"gray"}}/>
                        <p>Upsize</p>
                        <span>+ 2.00</span>
                    </button>
                </div>
            </div>
            <div className="productDetail_addProduct">
                <div className="productDetail_addProduct_quantity">
                    <RemoveIcon style={{fontSize:1.5+"em", color:"lightgray"}}/>
                    <p>1</p>
                    <AddIcon style={{fontSize:1.5+"em", color:"#f31f57"}}/>
                </div>
                <div className="productDetail_addProduct_checkout">
                    <p>add To Card</p>
                    <p className="productDetail_addProduct_checkoutPrice">€ 24.60</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
