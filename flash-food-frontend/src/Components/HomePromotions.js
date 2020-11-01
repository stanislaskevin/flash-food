import React, {useState, useEffect} from 'react'
import './HomePromotions.css'
import PromotionItem from './PromotionItem'
import axios from '../axios'

function HomePromotions() {
    const [promotion, setPromotion] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res =  await axios.get('/v1/promotions')
            setPromotion(res.data)

            return res
        }
        fetchData()
    },[])

    return (
        <div className="homePromotions">
            <h2>Promotions</h2>
            <div className="homePromotions_body">
                {promotion.map(({url}) => (
                    <PromotionItem 
                        url={url}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePromotions
