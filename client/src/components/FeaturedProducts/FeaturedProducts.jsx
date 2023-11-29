import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card.jsx'

const FeaturedProducts = ({type}) => {

    const data = [
        
        {
            id:1,
            img: "img/Featured/P1.png",
            img2:"img/Featured/P2.png",
            title: "Long Sleeve Graphic shirt",
            isNew: true,
            oldPrice: 19,
            Price: 12,
        },
        {
            id:2,
            img: "img/Featured/P1.png",
            img2:"img/Featured/P2.png",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            Price: 12,
        },
        {
            id:3,
            img: "img/Featured/P1.png",
            img2:"img/Featured/P2.png",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            Price: 12,
        },
        {
            id:4,
            img: "img/Featured/P1.png",
            img2:"img/Featured/P2.png",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            Price: 12,
        },
        
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
            </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts