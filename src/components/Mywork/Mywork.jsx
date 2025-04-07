import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/1st.avif'

 
const Mywork = () => {
    return (
        <div  id="MyWork" class="mywork">
            <div class="mywork-title">
                <h1>My Latest Work</h1>
                
                <img src={theme_pattern} alt="" />
               

            </div>
            <div class="mywork-container">
                <p>Show More</p>
            </div>

        </div>
    )
}

export default Mywork