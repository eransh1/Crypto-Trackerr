import React, { useState } from 'react'
import "../css/Navbar.css"
import BrandLogo from '../images/BrandLogo'

const Navbar = ({setSearchValue}) => {

 const[searchIconIsClick,setSearchIconIsClick]=useState(false) 
  return (
   <>
    <section id='navbar'>
        <div className='navbarr'>
        <div className='brand'>
        <div className='brand-logo'><BrandLogo /></div>
<p className='brand-name'>Crypto Tracker</p>
</div>
{searchIconIsClick?null:<i onClick={()=>setSearchIconIsClick(current=>!current)} className="fa-solid fa-magnifying-glass ms-auto search-icon"></i>}
{searchIconIsClick?<div className='input-box ms-auto'><input onChange={(e)=>setSearchValue(e.target.value)} className="ms-auto" id='search' type="text" name='search' placeholder='Search.....' /><i onClick={()=>{setSearchIconIsClick(current=>!current);setSearchValue("")}} className="fa-solid fa-xmark xmark"></i></div>:null}
<i className="fa-solid fa-bars burger"></i>
        </div>
    </section>
   </>
  )
}

export default Navbar