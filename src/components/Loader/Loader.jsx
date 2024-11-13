import React from 'react';
import LoaderImg from "../../images/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
        <div className ="spinner"></div>
    </div>
  )
}

export default Loader