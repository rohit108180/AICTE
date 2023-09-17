import React from 'react'
import secondaryImage from '../../assests/landingimage2.png'

import coverImage from '../../assests/landingCoverImage.png'
import './Landing.css'
import Card from '../../Components/Card'
import CardComponent from '../../Components/Card'

export const Landing = () => {
  return (
    <div style={{marginTop: "60px"}}>
      <div className='topPart'>
        <img className='coverImage' src={coverImage}/>
        <h1 className='tagLine'>
        A unified portal for developing a model Curriculum for 
all the AICTE Approved Institutes.
        </h1>
        <img className='secondary-image' src={secondaryImage}/>
        
      </div>
        <div className='section' >
            <div className='section-heading'>
                <h2>
                Initiative and Schemes
                </h2>
                <div className='borderline'> </div>
            </div>

            <div className='section-content'>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                </div>


        </div>

        <div className='section' >
            <div className='section-heading'>
                <h2>
                Initiative and Schemes
                </h2>
                <div className='borderline'> </div>
            </div>

            <div className='section-content'>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                </div>


        </div>
    </div>  

  
  )
}

