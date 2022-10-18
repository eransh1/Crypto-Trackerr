import React from 'react'

const ItemBox = (props) => {
  return (
  <>
    <div className='item-box'>
        <div className='item-img-cont'><img className='item-image' src={props.image} alt="item-img" /></div>
        <div className='item-intro'>
            <p className='item-title'>{props.title}</p>
            <p className='item-sub-title'>{props.subTitle}<br />{props.subTitle1}</p>
        </div>
    </div>
  </>
  )
}

export default ItemBox