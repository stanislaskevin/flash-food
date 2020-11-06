import React, { useState, useEffect}  from 'react'
import './ProductDetail.css'
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {Link} from "react-router-dom";
import axios from '../axios'
import {useStateValue} from '../StateProvider'

function ProductDetail({_id}) {
    const [productDetail, setProductDetail] = useState([])
    const [{basket}, dispatch] = useStateValue()

    useEffect(() => {
        async function fetchData() {
            const res =  await axios.get(`/v3/product/${_id}`)
            setProductDetail(res.data)

            return res
        }
        fetchData()
    },[])

    const addToBasket = () => {
        const product = productDetail
        dispatch({
            type: 'ADD_BASKET', item: {
                id: productDetail._id,
                title: productDetail.title, 
                description: productDetail.description, 
                pricez: productDetail.pricez,
                url: productDetail.url,             
            }
        })
    }

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_BASKET', item: {
                id: productDetail._id
            }
        })
    }

    return (
        <div className="productDetail">
            <div className="productDetail_header">
                <Link className="back" to="/">
                    <HighlightOffIcon />
                </Link>
                <img src="https://i.f1g.fr/media/eidos/805x453_crop/2017/07/12/XVM883e9268-664e-11e7-8d20-2d6ece4fe616.jpg" alt="" />
            </div>
            <div className="productDetail_title">
                <h3>{productDetail.title}</h3>
                <h3 className="productDetail_title_price">{productDetail.pricez}</h3>
            </div>

            <div className="productDetail_body">
                <div className="productDetail_description">
                    <p>{productDetail.description}</p>
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
                    <RemoveIcon onClick={removeFromBasket} style={{fontSize:1.5+"em", color:"lightgray"}}/>
                    <p>{basket?.length}</p>
                    <AddIcon onClick={addToBasket} style={{fontSize:1.5+"em", color:"#f31f57"}}/>
                </div>
                <Link  to="/checkout" style={{textDecoration: "none"}} className="productDetail_addProduct_checkout">
                    <p>add To Card</p>
                    <p className="productDetail_addProduct_checkoutPrice">€ {productDetail.pricez}</p>
                </Link>
            </div>
        </div>
    )
}

export default ProductDetail
