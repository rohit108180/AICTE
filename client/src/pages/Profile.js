import React from 'react'

import { SiGooglescholar } from 'react-icons/si'
import './profile.css'

export const Profile = () => {
  return (
    <div className='profileContainer'>
        <div className='left-sidebar' >
            <div className='profileImage rounded-full'>
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='profile'/>

            </div>
            
            <div className='name'>
                <h2>John Doe</h2>
                <p>Web Developer</p>

            </div>
            <div className='socials'> 
                <a href='https://www.facebook.com/'>Facebook</a> 
                <a href='https://www.instagram.com/'>Instagram</a>
                <a href='https://www.twitter.com/'>Twitter</a>

                <SiGooglescholar/>
            </div>
        </div>
        <div className='right'>
            
              <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Phone'/>
                <input type='text' placeholder='Message'/>
                <button>Submit</button>


            
        </div>
    </div>
  )
}
