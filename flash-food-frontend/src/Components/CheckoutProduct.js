import React from 'react'
import './CheckoutProduct.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useStateValue} from '../StateProvider'

function CheckoutProduct() {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_BASKET',
            item: {  
                
            }
        })
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_title">
                <h2>Order Summary</h2>
                <div className="checkoutProduct_title_more">
                    <AddIcon style={{fontSize:1+"em", color:"#f31f57"}}/>
                    <p>Add more</p>
                </div>
            </div>
            <div className="checkoutProduct_product">
                {basket.map(item => (
                    <>
                <div className="checkoutProduct_productItem">
                    <div className="checkoutProduct_productLeft">
                        <img src={item.url} alt="" />
                    </div>
                    <div className="checkoutProduct_productCenter">
                        <p>{item.title}</p>
                        <span>{item.description}</span>
                        <button>Edit</button>
                    </div>
                    <div className="checkoutProduct_productRight">
                        <div className="checkoutProduct_productRight_number">
                            <RemoveIcon style={{fontSize:1+"em", color:"lightgray"}}/>
                            <p>1</p>
                            <AddIcon style={{fontSize:1+"em", color:"lightgray"}}/>
                        </div>
                        <p>{item.pricez}</p>
                    </div>
                </div>
                </>
                ))}
            </div>
        </div>
    )
}

export default CheckoutProduct
