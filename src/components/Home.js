import React,{useEffect, useState} from 'react'
import "../css/Home.css"
import Navbar from './Navbar'
import Carousel from './Carousel'
import CryptoList from './CryptoList'
import ReactPaginate from "react-paginate"
import CryptoItemCont from './CryptoItemCont'
import FavCryptoList from './FavCryptoList'



const Home = () => {
// pagination const
    const[pageNumber,setPageNumber]=useState(0) 

    const getdataFromApi=async()=>{
        const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`
        const data = await (await fetch(url)).json();
        if(data){setApiData(data)}
        else{setApiData([])}
     }

    const[id,setId]=useState(1) 
 const[showRowValue,setShowRowValue]=useState(10)
 const[apiData,setApiData]=useState([])
 
const[cryptoItem,setCrytoItem]=useState([])

const[favItemList,setFavItemList]=useState([])
const[favItemListId,setFavItemListId]=useState([])
const[searchValue,setSearchValue]=useState("")


 useEffect(()=>{
getdataFromApi();
 },[showRowValue])
 
//Pagination
const itemsPerPage=showRowValue;
const pagesVisited=pageNumber*itemsPerPage

const displayCrypto=apiData.filter((item)=>{
  if(searchValue===""){return item}
  else if (searchValue.toLowerCase().includes(item.name.toLowerCase())){return item}
}).slice(pagesVisited,pagesVisited+itemsPerPage)

const pageCount=Math.ceil(apiData.length/itemsPerPage)

const changePage=({selected})=>{
setPageNumber(selected)
}

  return (
    <>
        <Navbar setSearchValue={setSearchValue} />
        <Carousel id={id} setId={setId} setShowRowValue={setShowRowValue} heading={id===0?"My Favourites":id===1?"Top 100 Cryptocurrencies by Market Cap":id===2?"Top 100 DeFi by Market Cap":id===3?"Top 100 NFTs & Collectibles by Market Cap":""} />
        {id===1?<><div className='cryto-containerr'><CryptoList favItemListId={favItemListId} setFavItemList={setFavItemList} setFavItemListId={setFavItemListId} setCrytoItem={setCrytoItem} displayCrypto={displayCrypto} /></div> 
        <div className='footer-cont'>
        <ReactPaginate 
  previousLabel={<i className="fa-solid fa-chevron-left"></i>}
  nextLabel={<i className="fa-solid fa-chevron-right"></i>}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"pagination-btn"}
  previousLinkClassName={"prev-btn"}
  nextLinkClassName={"next-btn"}
  disabledClassName={"disable-btn"}
  activeClassName={"pagination-active"}
/>
</div></>:null}
{cryptoItem.length===0?null:<CryptoItemCont cryptoItem={cryptoItem} setCrytoItem={setCrytoItem} />}
{id===0?<div className='fav-cryto-containerr'><FavCryptoList setCrytoItem={setCrytoItem} favItemListId={favItemListId} setFavItemListId={setFavItemListId} favItemList={favItemList} setFavItemList={setFavItemList}/></div>:null} 
    </>
  )
}

export default Home