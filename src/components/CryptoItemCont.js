import React from 'react'
import "../css/CryptoItemCont.css"

const CryptoItemCont = ({cryptoItem,setCrytoItem}) => {
  return (
    <section id='CryptoItemCont'>
        <div className='CryptoItemCont'>
          <div className='top-title-cont'>
          <div className='cryto-img-contt'><img className='crypto-img' src={cryptoItem.image} alt="crypto-img" /></div>
            <p className='cryto-namee'>{cryptoItem.name}</p>
            <i onClick={()=>setCrytoItem([])} className="fa-solid fa-xmark x-mark ms-auto"></i>
          </div>
          <div className="row crypto-item-row">
            <div className="col-4 price-item-column">
              <p className='price-itemm'>PRICE</p>
              <p className='price-item-value'>${cryptoItem.current_price.toLocaleString()}</p>
            </div>
            <div className="col-4 h24-item-column">
              <p className='h24-itemm'>24H</p>
              <div style={{color:cryptoItem.price_change_percentage_24h_in_currency.toString().includes("-")?"#EA3943":"#16C784"}} className="h24-itemm-value">{cryptoItem.price_change_percentage_24h_in_currency.toString().includes("-")?<i className="fa-solid fa-caret-down down"></i>:<i className="fa-solid fa-caret-up up"></i>}{cryptoItem.price_change_percentage_24h_in_currency.toString().slice(0,5)}%</div>
            </div>
            <div className="col-4 h7-item-column">
              <p className='h7-itemm'>7H</p>
              <div style={{color:cryptoItem.price_change_percentage_7d_in_currency.toString().includes("-")?"#EA3943":"#16C784"}} className="h7-itemm-value">{cryptoItem.price_change_percentage_7d_in_currency.toString().includes("-")?<i className="fa-solid fa-caret-down down"></i>:<i className="fa-solid fa-caret-up up"></i>}{cryptoItem.price_change_percentage_7d_in_currency.toString().slice(0,5)}%</div>
            </div>
          </div>
          <div className='market-cap-roww'>
            <p className='market-cap-itemm'>MARKET CAP</p>
            <p className='market-cap-value'>${cryptoItem.market_cap.toLocaleString()}</p>
          </div>
          <div className='volume-roww'>
            <p className='volume-itemm'>VOLUME (24H)</p>
            <p className='volume-value'>${cryptoItem.total_volume.toLocaleString()}<span className='volume-value-span'>({cryptoItem.high_24h.toLocaleString()}BTC)</span></p>
          </div>
          <div className='circulating-supply-roww'>
            <p className='circulating-supply-itemm'>CIRCULATING SUPPLY</p>
            <p className='circulating-supply-value'>${cryptoItem.market_cap.toLocaleString()}</p>
          </div>
        </div>
    </section>
  )
}

export default CryptoItemCont