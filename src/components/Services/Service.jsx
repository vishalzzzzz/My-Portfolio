import React from 'react'
import './Service.css'
import underline from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import Services_Data  from '../../assets/services_data.js'


const Service = () => {
  return (
   <div  id="Service" className='services'>
    <div className="services-title">
        <h1> My Services</h1>
        <img src={underline} alt="" />
    </div>
    <idv className="services-container">
      {Services_Data.map((service,index)=>{
        return <div key={index} className='service-format'> 
        <h3>{service.s_no}</h3>
        <h2>{service.s_name}</h2>
        <p>{service.s_desc}</p>
        <div className='service-readmore'>
          <p>Read More</p>
          <img src={arrow_icon} alt="" />
        </div>
        </div>
      })}
    </idv>
   </div>
  )
}

export default Service