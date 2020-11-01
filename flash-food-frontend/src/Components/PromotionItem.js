import React from 'react'
import './PromotionItem.css'

function PromotionItem({ url }) {
    return (
        <div className="promotionItem">
            <img src={url} alt="" />
        </div>
    )
}

export default PromotionItem
