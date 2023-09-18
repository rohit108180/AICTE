import React, { useState } from 'react'

import { SiGooglescholar } from 'react-icons/si'
import './profile.css'

import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Chip, TextField } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const Profile = () => {

    const [profile, setProfile] = useState({
        name: 'Rohit Sharma',
        email: 'rohit@gmail.com',
        designation: 'Proffeessor',
        profileImage: '',
        role : '0',
        githubLink: 'asdfasdfasd',
        googleScholarProfileLink: 'adfadfasdf',
        linkedIn: 'dfadsfasdfasf',
        userBio: 'As a student of Computer Science and Engineering at Netaji Subhas University of Technology, I am constantly seeking opportunities to enhance my skills and stay up-to-date with the latest developments in the field of technology. My passion for technology is evident in my experience as a MERN stack web developer, where I have honed my skills in creating scalable and robust web applications. I am not just a tech enthusiast, but also a problem solver who enjoys tackling complex challenges and finding creative solutions.',
        specializations: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        institute: 'Netaji Subhas University of Technology',
    })


    

    const onChange=(e)=>{
        console.log(e.target.value);
        setProfile({...profile, [e.target.name]: e.target.value})
    }

  return (
    <div className='profileContainer'>
        <div className='left-sidebar' >

            <div className='top'>
            <div className='profileImage rounded-full'>
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='profile'/>

            </div>
            
            <div className='name'>
                <h2>Rohit Sharma</h2>

            </div>
            <div className='socials'> 
               
                <a href='https://www.linkedin.com/'><LinkedInIcon/></a>
                <a href='https://www.github.com/'>
                <GitHubIcon/>
                </a>
                <a href='https://www.google.com/'>
                <SiGooglescholar/>
                </a>
            </div>

            </div>
            {/* put button at the bottom of flex  */}
            <Button  className = "bookmark" variant="contained" startIcon={<BookmarkIcon />}  >Saved Curriculum</Button>



        </div>
        <div className='right'>
            <div style={{display:'flex', flexDirection:"column", width:"60%", paddingTop: "5rem"}}>
            <TextField
                // fullWidth
                id="name"
                label="Name"
                name='name'
                value={profile.name}
                onChange={onChange}
                margin='normal'
            /> 
            <TextField
                // fullWidth
                id="email"
                label="Email"
                name='email'
                value={profile.email}
                onChange={onChange}
                disabled
                margin='normal'
            />

        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          value={profile.userBio}
          onChange={onChange}
          multiline
          margin='normal'
        />

        {/* designation */}
        <TextField
                // fullWidth
                id="designation"
                label="Designation"
                name='designation'
                value={profile.designation}
                onChange={onChange}
                margin='normal'
            /> 
        {/* institute */}
        <TextField
                // fullWidth
                id="institute"
                label="Institute"
                name='institute'
                value={profile.institute}
                onChange={onChange}
                margin='normal'
            /> 
        {/* Specialization */}


        <TextField
                // fullWidth
                id="specialization"
                label="Specialization"
                name='specialization'
                value={""}
                onChange={onChange}
                margin='normal'
            /> 

        <div>
        {profile.specializations.map((skill)=>{
            return <Chip label={skill} margin='10px' />
        })}
        </div>

        {/* github Profile */}
        <TextField
                // fullWidth
                id="githubLink"
                label="Github Profile"
                name='githubLink'
                value={profile.githubLink}
                onChange={onChange}
                margin='normal'
            /> 
        {/* google scholar profile */}
        <TextField
                // fullWidth
                id="googleScholarProfileLink"
                label="Google Scholar Profile"
                name='googleScholarProfileLink'
                value={profile.googleScholarProfileLink}
                onChange={onChange}
                margin='normal'
            /> 
        {/* linkedIn */}
        <TextField
                // fullWidth
                id="linkedIn"
                label="LinkedIn"
                name='linkedIn'
                value={profile.linkedIn}
                onChange={onChange}
                margin='normal'
            /> 
        {/* instagram */}

        <Button  className = "bookmark" variant="contained"  >Update</Button>

        </div>

        
        </div>
    </div>
  )
}
