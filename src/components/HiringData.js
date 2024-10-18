import React from 'react'
import HiringImage from "../Images/Hiringcompanies.jpg"


const HiringData = () => {
  return (
    <div className="choose mt-5 mr-3">
<h2 className='' style={{fontSize:"32px",fontWeight:700,color:"#34495E"}} >Top Hiring Companies </h2>

<div className='' style={{width:"100%",height:"500px"}}>
        <img  style={{width:"100%",height:"100%"}} src={HiringImage}/>
       </div>

    </div>
  )
}

export default HiringData