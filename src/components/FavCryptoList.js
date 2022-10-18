import React from 'react'
import "../css/FavCryptoList.css"

import DownArrow from "../images/DownArrow"
import Option3Dots from "../images/Option3Dots"

const FavCryptoList = ({favItemList,setFavItemList,setFavItemListId,favItemListId,setCrytoItem}) => {

    function handleFavCrytoItemClick(id,item){
        console.log(item)
        setCrytoItem(item)
        } 

       function handleFavItemDelClick(id){
const ultraNewFavItemList=favItemList.filter((item)=>{
    return item.id!==id
})
setFavItemList(ultraNewFavItemList)
const ultraNewFavItemId=favItemListId.filter((item)=>{
    return item!==id
})
setFavItemListId(ultraNewFavItemId)
       } 


  return (
    <>
{favItemList.length===0?<div className='noFavItem'><h1>Your Favourite Coins will Appear Here</h1></div>:null}

{favItemList.length!==0?<div className='row crypto-list-row'>
        <div className="col-1 star-col"></div>
        <div className="col-1 number-col">#</div>
        <div className="col-2 name-col">NAME</div>
        <div className="col-1 price-col">PRICE</div>
        <div className="col-1 h24-col">24H <DownArrow /></div>
        <div className="col-1 h7-col">7D</div>
        <div className="col-2 mkt-cap-col">MARKET CAP</div>
        <div className="col-2 volume-col">VOLUME(24H)</div>
        <div className="col-1 calc-supply-col">CIRCULATING SUPPLY</div>
        <div className="col-1 option-col"></div>
    </div>:null}

    {favItemList.map((item)=>{
  
  return <div className='row cryto-item' key={item.id} id={item.id}>
  <div onClick={()=>handleFavItemDelClick(item.id)} className="col-1 star-col custom-col"><i style={{cursor:"pointer"}} className="fa-solid fa-trash trash"></i></div>
      <div className="col-1 number-col number custom-col">{item.market_cap_rank}</div>
      <div onClick={()=>handleFavCrytoItemClick(item.id,item)} style={{cursor:"pointer"}} className="col-2 name-col custom-col">
          <div className='cryto-img-cont'><img className='crypto-img' src={item.image} alt="crypto-img" /></div>
          <p className='cryto-name'>{item.name}</p>
          <p className='crypto-abbv'>{item.symbol.toUpperCase()}</p>
      </div>
      <div className="col-1 price-col custom-col">${item.current_price.toLocaleString()}</div>
      <div style={{color:item.price_change_percentage_24h_in_currency.toString().includes("-")?"#EA3943":"#16C784"}} className="col-1 h24-col custom-col">{item.price_change_percentage_24h_in_currency.toString().includes("-")?<i className="fa-solid fa-caret-down down"></i>:<i className="fa-solid fa-caret-up up"></i>}{item.price_change_percentage_24h_in_currency.toString().slice(0,5)}%</div>
      <div style={{color:item.price_change_percentage_7d_in_currency.toString().includes("-")?"#EA3943":"#16C784"}} className="col-1 h7-col custom-col">{item.price_change_percentage_7d_in_currency.toString().includes("-")?<i className="fa-solid fa-caret-down down"></i>:<i className="fa-solid fa-caret-up up"></i>}{item.price_change_percentage_7d_in_currency.toString().slice(0,5)}%</div>
      <div className="col-2 mkt-cap-col custom-col">${item.market_cap.toLocaleString()}</div>
      <div className="col-2 volume-coll custom-col"><p className='volume'>${item.total_volume.toLocaleString()}</p> <p className='volume-as-per-btc'>{item.high_24h.toLocaleString()} BTC</p></div>
      <div className="col-1 calc-supply-col custom-col">{item.circulating_supply.toLocaleString()} BTC</div>
      <div className="col-1 option-col custom-col"><Option3Dots /></div>
  </div>
})}  
    </>
  )
}

export default FavCryptoList