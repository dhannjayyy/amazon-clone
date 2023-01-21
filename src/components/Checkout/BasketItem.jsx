import React from 'react'
import './Checkout.scss'

const BasketItem = ({image,title,price,rating}) => {

  // console.log(basket)
  return (
    <div className='basketItem'>
      <img className="basketItem_image" src={image}/>
      <div className="basketItem_info">
        <p className="basketItem_title">
          {title}
        </p>
        <p className="basketItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem_rating">
        {
            Array(rating).fill().map((_,i)=>{
              return (<p key={i}>⭐</p>)
            })
          }
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  )
}

export default BasketItem