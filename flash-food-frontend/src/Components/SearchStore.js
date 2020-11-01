import React from 'react'
import './SearchStore.css'
import LoopIcon from '@material-ui/icons/Loop';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function SearchStore() {
    return (
        <div className="searchStore">
            <div className="searchStore_left">
                <LoopIcon style={{color:"#f31f57", fontSize:1.2+"em"}}/>
                <div className="searchStore_search">
                    <h3>Searching</h3>
                    <p>Locating nearest store...</p>
                </div>
            </div>
            <div className="searchStore_right">
                <ChevronRightIcon style={{color:"lightgray", fontSize:1.2+"em"}}/>
            </div>
        </div>
    )
}

export default SearchStore
