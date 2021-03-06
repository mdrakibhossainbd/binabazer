import React from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../../img/icon1.PNG'; 
import icon2 from '../../../img/icon2.PNG';
import icon3 from '../../../img/icon3.PNG';
import icon4 from '../../../img/icon4.PNG';

import './SearchBar.css';
const SearchBar = () => {
    return (
        <div className="mainHeader d-flex align-items-center">
         <div className="row header">
               <div className="header-logo">

                 <Link className="title" to="#"><span className="title-one">bina</span> <span className="title-two">bazeer</span></Link>  
   
               </div>
               <div className="header-search">
                   <input className="search-field"  style={{borderRadius:"6px 0px 0px 6px", borderColor:"#9F9F9F",borderDecoration:"none",borderStyle:"solid" }} type="text"></input>
               </div>
               <div className="header-search-icon d-flex align-items-center justify-content-center">
                   {/* icon1 */}
                   <Link className="title"><span style={{color:"white"}}>Search <i class="fa fa-search" aria-hidden="true"></i></span></Link>  
               </div>

               <div className="bar-icon d-flex align-items-center box-size">
                 
                   <Link><img src={icon1} alt=""/></Link>
               </div>
               <div className="bar-icon d-flex align-items-center box-size">
                 
                   <Link><img src={icon2} alt=""/></Link>
               </div>
               <div className="bar-icon d-flex align-items-center box-size">
                 
                   <Link><img src={icon3} alt=""/></Link>
               </div>
               <div className="bar-icon d-flex align-items-center box-size">
                 
                   <Link><img src={icon4} alt=""/></Link>
               </div>
               
         </div>
        </div>
    );
};

export default SearchBar;