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

    return (
        <div className="checkout">
            {basket?.length === 0 ? (
                <>
                    <Link to="/">
                        <ArrowBackIosIcon style={{fontSize:1+"em", color:"#f31f57"}}/>
                    </Link>
                    <h2>Shopping is empty</h2>
                </>
            ):(
                <>
                <div className="checkout_header">
                    <Link to="/">
                        <ArrowBackIosIcon style={{fontSize:1+"em", color:"#f31f57"}}/>
                    </Link>
                    <h1>checkout</h1>
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
                </>   
            )}
        </div>
    )
}

export default Checkout
