import React, { useState, useEffect} from 'react'
import './Home.css'
import HomeHeader from '../Components/HomeHeader'
import HeaderOption from '../Components/HeaderOption'
import HomePromotions from '../Components/HomePromotions'
import HomeEssentials from '../Components/HomeEssentials'
import avatarStan from '../assets/avatar.jpg'
import axios from '../axios'


function Home() {
    const [user, setUser] = useState([])
    const [ticket, setTicket] = useState([])

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

            <HomePromotions />                
            <HomeEssentials />
        </div>
    )
}

export default Home
