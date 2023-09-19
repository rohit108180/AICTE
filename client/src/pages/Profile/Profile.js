import React, { useState } from 'react'

import { SiGooglescholar } from 'react-icons/si'
import './profile.css'

import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Chip, TextField } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useAppcontext } from '../../Context/context/appContext';
import { Navigate, useNavigate } from 'react-router-dom';

export const Profile = () => {

    const {user, updateProfile}  =useAppcontext();
    const [avatarPreview, setAvatarPreview2] = useState(undefined);

    // get first part from the name
    // const name = user.name.split(" ")[0];

    // const [profile, setProfile] = useState({
    //     name: 'Rohit Sharma',
    //     email: 'rohit@gmail.com',
    //     designation: 'Proffeessor',
    //     profileImage: '',
    //     role : '0',
    //     githubLink: 'asdfasdfasd',
    //     googleScholarProfileLink: 'adfadfasdf',
    //     linkedIn: 'dfadsfasdfasf',
    //     userBio: 'As a student of Computer Science and Engineering at Netaji Subhas University of Technology, I am constantly seeking opportunities to enhance my skills and stay up-to-date with the latest developments in the field of technology. My passion for technology is evident in my experience as a MERN stack web developer, where I have honed my skills in creating scalable and robust web applications. I am not just a tech enthusiast, but also a problem solver who enjoys tackling complex challenges and finding creative solutions.',
    //     specializations: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    //     institute: 'Netaji Subhas University of Technology',
    // })
    const navigate = useNavigate()
    const [profile, setProfile] = useState({...user});

    // setProfile(user);

    console.log(profile);


    

    const onChange=(event)=>{
    
            if (event.target.name === "profileImage") {
              const reader = new FileReader();
        
              reader.onload = () => {
                if (reader.readyState === 2) {
                  console.log("read image", reader.result);
                  setAvatarPreview2(reader.result);
        
                  const newState = {
                    ...profile,
                    profilePhoto: reader.result,
                  };
        
                  console.log(newState);
        
                  setProfile(newState);
                  console.log("setted state", newState);
                }
              };
        
              reader.readAsDataURL(event.target.files[0]);
            } else {
              setProfile({
                ...profile,
                [event.target.name]: event.target.value,
              });
            }
          };
        
    const handleSubmit = (event) => {
        console.log("updateProfile")
        event.preventDefault();
        updateProfile(profile);
        setAvatarPreview2(null);
        console.log(profile);
      };
    

  return (
    <div className='profileContainer'>
        <div className='left-sidebar' >

            <div className='top'>
            <div className='profileImage rounded-full'>
                <img src ={profile?.profilePicture?.url} alt='profile'/>

            </div>
            
            <div className='name'>
                <h2>{profile?.name}</h2>

            </div>
            <div className='socials'> 
               
                <a href={profile.linkedIn} target="_blank"><LinkedInIcon/></a>
                <a href ={profile.githubLink} target ="_blank">
                <GitHubIcon/>
                </a>
                <a href={profile.googleScholarProfileLink} target ="_blank">
                <SiGooglescholar/>
                </a>
            </div>

            </div>
            {/* put button at the bottom of flex  */}
            <Button  className = "bookmark" onClick={()=>navigate("/Dashboard#Bookmarks", {replace:true})} variant="contained" startIcon={<BookmarkIcon />}  >Saved Curriculum</Button>



        </div>
        <div className='right'>
            <div style={{display:'flex', flexDirection:"column", width:"60%", paddingTop: "5rem", paddingBottom:"5rem"}}>

                <div style={{width:"100%", display:"flex", flexDirection:"row"}}>
            <TextField
                fullWidth
                id="name"
                label="Name"
                name='name'
                value={profile?.name}
                onChange={onChange}
                margin='normal'
                // width="100%"
                style ={{marginRight : "1rem"}}
            /> 
            <TextField
                // fullWidth
                id="email"
                label="Email"
                name='email'
                value={profile?.Email}
                onChange={onChange}
                disabled
                margin='normal'
            />
            </div>

        <TextField
          id="outlined-textarea"
          label="Bio"
          placeholder="Placeholder"
          value={profile?.userBio}
          name='userBio'
          onChange={onChange}
          multiline
          margin='normal'
          min-height="100px"
        />

        {/* designation */}
        <TextField
                // fullWidth
                id="designation"
                label="Designation"
                name='designation'
                value={profile?.designation}
                onChange={onChange}
                margin='normal'
            /> 
        {/* institute */}
        <TextField
                // fullWidth
                id="institute"
                label="Institute"
                name='institute'
                value={profile?.institute}
                onChange={onChange}
                margin='normal'
            /> 
        {/* Specialization */}


        <TextField
                // fullWidth
                id="specialization"
                label="Specialization"
                name='specialization'
                value = {profile?.specialization}
                onChange={onChange}
                margin='normal'
            /> 

                <label>Profile Image </label>
                      <div>
                      <input
                        name="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) => onChange(e)}
                      ></input>
                      </div>

                      {avatarPreview && (
                        <img
                          alt="Profile Image"
                          src={avatarPreview}
                          width="100%"
                          padding="10px"
                          margin="10px"
                        ></img>
                      )}

        <div>
        {/* {profile?.specializations.map((skill)=>{
            return <Chip label={skill} margin='10px' />
        })} */}
        </div>

        {/* github Profile */}
        <TextField
                // fullWidth
                id="githubLink"
                label="Github Profile"
                name='githubLink'
                value={profile?.githubLink}
                onChange={onChange}
                margin='normal'
            /> 
        {/* google scholar profile */}
        <TextField
                // fullWidth
                id="googleScholarProfileLink"
                label="Google Scholar Profile"
                name='googleScholarProfileLink'
                value={profile?.googleScholarProfileLink}
                onChange={onChange}
                margin='normal'
            /> 
        {/* linkedIn */}
        <TextField
                // fullWidth
                id="linkedIn"
                label="LinkedIn"
                name='linkedIn'
                value={profile?.linkedIn}
                onChange={onChange}
                margin='normal'
            /> 
        {/* instagram */}

        <Button onClick={handleSubmit} className = "bookmark" variant="contained"  >Update</Button>

        </div>

        
        </div>
    </div>
  )
}
