import React from 'react'
import "../css/Carousel.css"
import LeftArrow from "../images/LeftArrow"
import RightArrow from "../images/RightArrow"
import image from "../images/Image.png"
import image1 from "../images/Image 1.png"
import image2 from "../images/Image 2.png"
import ItemBox from './ItemBox'
import star from "../images/Star.png"
import CarouselNavBar from '../images/CarouselNavBar'

const Carousel = ({id,setId,setShowRowValue,heading}) => {

function handleValueContClick(e){
    setShowRowValue(e.target.value)
}

  return (
    <>
        <div id='carousel'>
<div className='carousel-cont'>
<div className='left-arrow'><LeftArrow /></div>
<div className='row carousel-row'>
<ItemBox image={image} title={"Take a quiz!"} subTitle={"Learn and earn $CKB"} />
<ItemBox image={image1} title={"Portfolio 🔥"} subTitle={"Track your trades in one place,"} subTitle1={"not all over the place"} />
<ItemBox image={image2} title={"Portfolio"} subTitle={"Track your trades in one place,"} subTitle1={"not all over the place"} />
</div>
<div className='right-arrow'><RightArrow /></div>
</div>
<div className='CarouselNavBar'><div className='carousel-nav-cont'><CarouselNavBar /></div></div>
<p className='heading'>{heading}</p>
<div className='nav-itemss'>
    <div onClick={()=>setId(0)} className='fav-item first'>
        <div className='star-img-cont'><img className='star-img' src={star} alt="star-imag" /></div>
        <p className={'fav-text '+(id===0?'selected':'')}>Favourites</p>
    </div>
    <div onClick={()=>setId(1)} className='fav-item'>
        <p className={'fav-text '+(id===1?'selected':'')}>CryptoCurrencies</p>
    </div>
    <div onClick={()=>setId(2)} className='fav-item defi-item'>
        <p className={'fav-text '+(id===2?'selected':'')}>DeFi</p>
    </div>
    <div onClick={()=>setId(3)} className='fav-item nft-item'>
        <p className={'fav-text '+(id===3?'selected':'')}>NFTs & Collectibles</p>
    </div>
    <div className='show-rows-cont ms-auto'>
        <p className='show-row-text'>show rows</p>
        <div className='show-row-value-cont custom-select'>
        <select onClick={handleValueContClick} className='value-cont' >
            <option value="100">100</option>
            <option value="90">90</option>
            <option value="80">80</option>
            <option value="70">70</option>
            <option value="60">60</option>
            <option value="50">50</option>
            <option value="40">40</option>
            <option value="30">30</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>

            </select>
        </div>
    </div>
</div>
        </div>
    </>
  )
}

export default Carousel