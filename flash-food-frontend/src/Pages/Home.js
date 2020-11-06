import React, { useState, useEffect} from 'react'
import './Home.css'
import HomeHeader from '../Components/HomeHeader'
import HeaderOption from '../Components/HeaderOption'
import PromotionItem from '../Components/PromotionItem'
import ProductItem from '../Components/ProductItem'
import avatarStan from '../assets/avatar.jpg'
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from '../axios'


function Home() {
    const [user, setUser] = useState([])
    const [ticket, setTicket] = useState([])
    const [promotion, setPromotion] = useState([])
    const [product, setProduct] = useState([])


    useEffect(() => {
        async function fetchData() {
            const res =  await axios.get('/v1/users')
            setUser(res.data)

            return res
        }
        fetchData()
    },[])

    useEffect(() => {
        async function fetchData() {
            const res =  await axios.get('/v1/tickets')
            setTicket(res.data)

            return res
        }
        fetchData()
    },[])

    useEffect(() => {
        async function fetchData() {
            const res =  await axios.get('/v1/promotions')
            setPromotion(res.data)

            return res
        }
        fetchData()
    },[])

    useEffect(() => {
        async function fetchData() {
            const res =  await axios.get('/v1/products')
            setProduct(res.data)

            return res
        }
        fetchData()
    },[])

    return (
        <div className="home">
            {user.map(({username, levelMember, flashPoint}) => (
                <HomeHeader
                    avatar={avatarStan}
                    username={username}
                    levelMember={levelMember}
                    flashPoint={flashPoint}
                />
            ))}

            {ticket.map(({category, offre}) => (
                <HeaderOption 
                    category={category}
                    offre={offre}
                />
            ))}

            <div className="home_promotions">
                <h2>Promotions</h2>
                <div className="home_promotions_body">
                {promotion.map(({url}) => (
                    <PromotionItem
                        url={url}
                    />
                ))}
                </div>
            </div> 

            <div className="home_essentials">
                <h2>The Essentials</h2>
                {product.map((product, _id) => (
                    <ProductItem 
                        key={_id} 
                        product={product}
                    />
                ))}
                <button ><AddBoxIcon /></button>
            </div>              
        </div>
    )
}

export default Home
