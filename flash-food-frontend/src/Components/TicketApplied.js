import React from 'react'
import './TicketApplied.css'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import CloseIcon from '@material-ui/icons/Close';

function TicketApplied({ category, offre}) {
    return (
        <div className="ticketApplied">
            <div className="ticketApplied_left">
                <span>{category}</span>
                <div className="ticketApplied_left_details">
                    <ConfirmationNumberIcon style={{color:"#ffffff", fontSize:1.2+"em"}}/>
                    <p>{offre}</p>
                </div>
            </div>
            <div className="ticketApplied_right">
                <CloseIcon style={{color:"#ffffff", fontSize:1+"em"}} />
            </div>
        </div>
    )
}

export default TicketApplied
