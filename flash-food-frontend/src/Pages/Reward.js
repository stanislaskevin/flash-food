import React from 'react'
import './Reward.css'
import {Link} from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';

function Reward() {
    return (
        <div className="reward">
            <div className="reward_header">
                <Link to="/">
                    <ArrowBackIosIcon style={{fontSize:1+"em", color:"#f31f57"}}/>
                </Link>
                <h1>Flash Reward</h1>
            </div>
            <div className="reward_member">
                <div className="reward_member_left">
                    <span>membertier</span>
                    <p>GOLD</p>    
                </div>
                <div className="reward_member_left">
                    <span>Spendable point</span>
                    <p>2,060</p>    
                </div>
                <div className="reward_member_right">
                    <ChevronRightIcon style={{color:"#ffffff", fontSize:1+"em"}} />
                </div>
            </div>
            <div className="reward_contain">
                <div className="reward_contain_header">
                    <h1>Popular</h1>
                    <span>See All</span>
                </div>
                <div className="reward_contain_body">
                    <div className="reward_card">
                        <div className="reward_card_img">
                            <div className="reward__card_img_note">
                                <p>%10 Off</p>
                            </div>
                            <img src="https://www.maxicoffee.com/blog/wp-content/uploads/2017/06/blog-coffee-shop-formation.jpg" alt="" />
                        </div>
                        <div className="reward_card_details">
                            <div className="reward_card_details_title">
                                <h2>%10 Off you Order</h2>
                                <p>200 P</p>
                            </div>
                            <span>Flash Coffee</span>
                        </div>
                    </div>
                    <div className="reward_card">
                        <div className="reward_card_img">
                            <div className="reward__card_img_note">
                                <p>%10 Off P</p>
                            </div>
                            <img src="https://www.maxicoffee.com/blog/wp-content/uploads/2017/06/blog-coffee-shop-formation.jpg" alt="" />
                        </div>
                        <div className="reward_card_details">
                            <div className="reward_card_details_title">
                                <h2>%10 Off you Order</h2>
                                <p>200 P</p>
                            </div>
                            <span>Flash Coffee</span>
                        </div>
                    </div>
                    <div className="reward_card">
                        <div className="reward_card_img">
                            <div className="reward__card_img_note">
                                <p>%10 Off</p>
                            </div>
                            <img src="https://www.maxicoffee.com/blog/wp-content/uploads/2017/06/blog-coffee-shop-formation.jpg" alt="" />
                        </div>
                        <div className="reward_card_details">
                            <div className="reward_card_details_title">
                                <h2>%10 Off you Order</h2>
                                <p>200 P</p>
                            </div>
                            <span>Flash Coffee</span>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="reward_contain">
                <div className="reward_contain_header">
                    <h1>Promotional Bundle</h1>
                    <span>See All</span>
                </div>
                <div className="reward_contain_body">
                    <div className="reward_card">
                        <div className="reward_card_img">
                            <div className="reward__card_img_note">
                                <p>good for 6</p>
                            </div>
                            <img src="https://www.maxicoffee.com/blog/wp-content/uploads/2017/06/blog-coffee-shop-formation.jpg" alt="" />
                        </div>
                        <div className="reward_card_details">
                            <div className="reward_card_details_title">
                                <h2>The meeting bundle</h2>
                                <p>1,200 P</p>
                            </div>
                            <span>Coffee Bundle</span>
                        </div>
                    </div>
                    <div className="reward_card">
                        <div className="reward_card_img">
                            <div className="reward__card_img_note">
                                <p>good for 6</p>
                            </div>
                            <img src="https://www.maxicoffee.com/blog/wp-content/uploads/2017/06/blog-coffee-shop-formation.jpg" alt="" />
                        </div>
                        <div className="reward_card_details">
                            <div className="reward_card_details_title">
                                <h2>The meeting bundle</h2>
                                <p>1,200 P</p>
                            </div>
                            <span>Coffee Bundle</span>
                        </div>
                    </div>
                    <div className="reward_card">
                        <div className="reward_card_img">
                            <div className="reward__card_img_note">
                                <p>good for 6</p>
                            </div>
                            <img src="https://www.maxicoffee.com/blog/wp-content/uploads/2017/06/blog-coffee-shop-formation.jpg" alt="" />
                        </div>
                        <div className="reward_card_details">
                            <div className="reward_card_details_title">
                                <h2>The meeting bundle</h2>
                                <p>1,200 P</p>
                            </div>
                            <span>Coffee Bundle</span>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Reward
