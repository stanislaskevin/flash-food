import React from 'react'
import './HeaderOption.css'
import TicketApplied from './TicketApplied'
import SearchStore from '../Components/SearchStore'


function HeaderOption({ category, offre }) {
    return (
        <div className="headerOption">
            <SearchStore />
            <TicketApplied 
                category={category}
                offre={offre}
            />
        </div>
    )
}

export default HeaderOption
