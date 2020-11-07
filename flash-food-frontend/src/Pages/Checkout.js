import React from 'react'
import './Checkout.css'
import testurl from '../assets/test.jpg'
import CheckoutProduct from '../Components/CheckoutProduct'
import {useStateValue} from '../StateProvider'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Link} from 'react-router-dom'

function Checkout() {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_BASKET',
            id: basket.item._id    
        })
    }
    return (
        <div className="checkout">
            {basket?.length === 0 ? (
                <>
                    <div className="checkout_empty">
                        <Link to="/">
                            <ArrowBackIosIcon style={{fontSize:1+"em", color:"#f31f57"}}/>
                        </Link>
                        <h2>Shopping is empty</h2>
                    </div>
                </>
            ):(
                <>
                <div className="checkout_header">
                    <Link to="/">
                        <ArrowBackIosIcon style={{fontSize:1+"em", color:"#f31f57"}}/>
                    </Link>
                    <h1>checkout</h1>
                </div>
                <div className="order_summary">
                    <div className="order_summary_title">
                        <h2>Order Summary</h2>
                        <div className="order_summary_title_more">
                            <AddIcon style={{fontSize:1+"em", color:"#f31f57"}}/>
                            <p>Add more</p>
                        </div>
                    </div>
                    <CheckoutProduct />
                    <div className="checkout_promotion">
                        <h3>Promotion</h3>
                        <p>Select Ticket now</p>
                    </div>
                    <div className="checkout_subtotal">
                        <div className="checkout_subtotalItem">
                            <h3>Subtotal</h3>
                            <p>€ 40</p>
                        </div>
                        <div className="checkout_subtotalItem">
                            <h3>TVA</h3>
                            <p>% 20.00</p>
                        </div>
                        <div className="checkout_subtotalTotal">
                            <h3>Total Amount</h3>
                            <p>€ 44</p>
                        </div>
                    </div>
                </div>
                <div className="checkout_pickup">
                    <div className="checkout_pickup_header">
                        <h2>Pick up from</h2>
                        <p>change store</p>
                    </div>
                    <div className="checkout_pickup_map">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="checkout_addProduct">
                    <Link  to="/order" style={{textDecoration: "none"}} className="checkout_addProduct_checkout">
                        <p>Order Now</p>
                        <p className="checkout_addProduct_price">€ 40</p>
                    </Link>
                </div>
            </>   
            )}
        </div>
    )
}

export default Checkout
