// import React,{useEffect} from 'react'
import secondaryImage from '../../assests/landingimage2.png'

import coverImage from '../../assests/landingCoverImage.png'
import './Landing.css'
// import { useNavigate } from "react-router-dom";
import useAuth from "../../MyHooks/useAuth";
import { useAppcontext } from '../../Context/context/appContext';

// import Card from '../../Components/Card'
import CardComponent from '../../Components/Card'


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const Landing = () => {
    
    const { setLogin } = useAuth();
    const {  user} = useAppcontext();

    useEffect(() => {
      getData();
    }, []);
  

    const navigate = useNavigate();

    const [Repos, setRepos] = useState([]);


    const getData = async () => {
      const response = await axios.get("http://localhost:5000/Repos/view/all");
      setRepos(response.data);
    };


    const Versions = (Repo) => {
      navigate(`/${Repo.Title}`, { state: { Repo } });
    };
      
    useEffect(() => {
        if(user){
      
            // navigate('/Dashboard');
            setLogin(true);
      
        }
      }, [user, navigate])
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
                    On going Projects
                </h2>
                <div className='borderline'> </div>
            </div>

            <div className='section-content'>
            {Repos.map((Repo) => {
              return (
                <Card
                  sx={{
                    width: 400,
                    height: 450,
                    // maxWidth: 400,
                    margin: "2rem",
                    padding: "2rem",
                    border: "1px solid #1E7C83",
                    // overflow: "scroll",
                  }}
                  key={Repo._id}
                >
                  <CardContent>
                    <Typography sx= {{height:150}} gutterBottom variant="h4" component="div">
                      {Repo.Title}
                    </Typography>
                    <Typography sx={{height:150}} variant="body1" color="text.secondary">
                      {Repo.Desc.length > 200 ? Repo.Desc.substring(0, 200) +"..." : Repo.Desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      onClick={() => {
                        Versions(Repo);
                      }}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      // onClick={() => {
                      //   handleUpdate(Repo._id);
                      // }}
                    >
                      Bookmark
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
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

