import React, {useState, useEffect} from 'react'
import './HomeEssentials.css'
import ProductItem from './ProductItem'
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from '../axios'

function HomeEssentials() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res =  await axios.get('/v1/products')
            setProduct(res.data)

            return res
        }
        fetchData()
    },[])

    return (
        <div className="homeEssentials">
            <h2>The essentials</h2>
            {product.map(({ title, description, pricez, url, id}) => (
                <ProductItem 
                    title={title}
                    description={description}
                    pricez={pricez}
                    url={url}
                />
            ))}
            <button><AddBoxIcon /></button>
        </div>
    )
}

export default HomeEssentials
