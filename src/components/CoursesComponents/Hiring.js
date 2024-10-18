import React from 'react'
import HiringImage from "../../Images/Hiringcompanies.jpg"
import { Container } from 'react-bootstrap'
import { Typography } from '@mui/material'
const Hiring = () => {
  return (
    <div>
            <Container className="mt-7" style={{marginTop:"60px",}}>
      {/* Section title */}
      <Typography variant="h5" align="left" gutterBottom>
        <span style={{ borderLeft: '4px solid #203864', paddingLeft: '8px',color:"#34495E" }}>Top Hiring Companies</span>
      </Typography>
       <div className='' style={{width:"100%",height:"450px"}}>
        <img  style={{width:"100%",height:"100%"}} src={HiringImage}/>
       </div>
      {/* Tools section */}
   
    </Container>
    </div>
  )
}

export default Hiring