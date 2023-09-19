import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import img from "../assests/landingimage2.png";
import { useAppcontext } from "../Context/context/appContext";
export default function Repositories() {
  const [Repos, setRepos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [id, setid] = useState("");
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseX = () => {
    setTitle("");
    setDesc("");
    setUpdate(false);
    setIsOpen(false);
  };

  useEffect(() => {
    getData();
    getBookmarks();
  }, []);

  const {getBookmarks , bookmarks} = useAppcontext();
  const handleUpdate = async (id) => {
    setUpdate(true);
    const response = await axios.get(`http://localhost:5000/Repos/${id}`);
    const updating = await response.data;
    setid(updating._id);
    setTitle(updating.Title);
    setDesc(updating.Desc);
    togglePopup();
  };
  const AddRepo = async (e) => {
    e.preventDefault();
    if (Title != "" && Desc != "") {
      if (update == true) {
        await axios.put(`http://localhost:5000/Repos/${id}`, {
          Title,
          Desc,
        });
        setTitle("");
        setDesc("");
        setUpdate(false);
        getData();
        togglePopup();
      } else {
        await axios.post("http://localhost:5000/Repos/add", {
          Title,
          Desc,
        });
        setTitle("");
        setDesc("");
        setUpdate(false);
        getData();
        togglePopup();
      }
    } else {
      alert("empty values");
    }
  };
  const getData = async () => {
    const response = await axios.get("http://localhost:5000/Repos/view");
    setRepos(response.data);
  };
  const Delete = async (id) => {
    await axios.delete(`http://localhost:5000/Repos/${id}`);
    getData();
  };

  const Versions = (Repo) => {
    navigate(`/${Repo.Title}`, { state: { Repo } });
  };

  return (
    <>
      {/* <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>

    <div class="col d-flex justify-content-end">
      {}
    <button
      class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
      type="button"
      id="cource-btn"
      onClick={togglePopup}
    >
      + New Curriculum
    </button>
    {isOpen && (
            <Popup
              content={
                <>
                  <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                    Repository Detail
                  </h4>
                  <form onSubmit={AddRepo}>
                    <div class="row">
                      <div class="mb-3 col col-10">
                        <label for="course-code" class="form-label">
                          Repository name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="course-code"
                          value={Title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      </div>
                      <div class="mb-3 col col-10">
                        <label for="course-name" class="form-label">
                          Description
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="course-name"
                          value={Desc}
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </div>

                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      className=" btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                    />
                  </form>
                </>
              }
              handleClose={handleCloseX}
            />
          )}

    </div>

    <table class="table" id="list">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

        {Repos.map((Repo) => {
              return (
                <tr scope="row" key={Repo._id}> 
                  <td  onClick={()=>Versions(Repo)}>{Repo.Title}</td>
                  <td>{Repo.Desc}</td>
                  <td>
                  <button className="btn btn-primary" onClick={()=>{handleUpdate(Repo._id)}}>Update</button>  
                  </td>
                  <td>
                  <button className="btn btn-primary" onClick={()=>Delete(Repo._id)} >Delete</button>  
                  </td>
                </tr>
              );
            })}      
          </tbody>
      </table>
    </div> */}

      <div>
        <div className="topPartRepo">
          <div className="userInfo">
            <h1>Hey Rohit,</h1>
            <Typography variant="h4" color="primary">
              Here's your progress
            </Typography>
          </div>

          <Button variant="outlined">
            <span className="addnewRepo" onClick={togglePopup}>
              + New Curriculum
            </span>
          </Button>
        </div>

        <div className="sectionRepo">
          <div className="section-headingRepo">
            <Typography variant="h4"> Unfinished Curriculum</Typography>
          </div>
          <div className="repo-cards" style={
            {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              // alignItems: "center",
              width : "100%"
            }
          }>
            {Repos?.map((Repo) => {
              return (
                <Card
                  sx={{
                    width: 400,
                    height: 450,
                    margin: "1rem",
                    padding: "2rem",
                    border: "1px solid #1E7C83",
                  }}
                  key={Repo._id}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div"style={{height:150, marginBottom:"1rem"}}>
                      {Repo.Title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" style={{height:150}}>
                      {Repo.Desc.length > 200? Repo.Desc.substring(0, 200) + "..." : Repo.Desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      onClick={() => {
                        Versions(Repo);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleUpdate(Repo._id);
                      }}
                    >
                      Update
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </div>


        <div className="sectionRepo" id ="Bookmarks">
          <div className="section-headingRepo">
            <Typography variant="h4"> Bookmarks</Typography>
          </div>
          <div className="repo-cards" style={
            {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              // alignItems: "center",
              width : "100%"
            }
          }>
            {bookmarks?.map((Repo) => {
              return (
                <Card
                  sx={{
                    width: 400,
                    height: 450,
                    margin: "1rem",
                    padding: "2rem",
                    border: "1px solid #1E7C83",
                  }}
                  key={Repo._id}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div"style={{height:150, marginBottom:"1rem"}}>
                      {Repo.Title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" style={{height:150}}>
                      {Repo.Desc.length > 200? Repo.Desc.substring(0, 200) + "..." : Repo.Desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        Versions(Repo);
                      }}
                    >
                      View
                      
                    </Button>
                  
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {isOpen && (
        <Popup
          content={
            <div style={{padding:"2rem"}}>

              <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                Repository Detail
              </h4>
              <form onSubmit={AddRepo}>
                <div class="row">
                  <div class="mb-3 col col-10">
                    {/* <label for="course-code" class="form-label">
                      Repository name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="course-code"
                      value={Title}
                      onChange={(e) => setTitle(e.target.value)}
                    /> */}


                  <TextField  
                        fullWidth
                        id="name"
                        label="Curriculum Title"
                        name='name'
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        margin='normal'
                        // width="100%"
                        style ={{marginRight : "1rem"}}
                      
                    /> 
                  </div>
                </div>
                <div class="mb-3 col col-10">
                 
                    <TextField
                        fullWidth
                        id="name"
                        label="Description"
                        name='name'
                        value={Desc}
                        onChange={(e) => setDesc(e.target.value)}
                        margin='normal'
                        // width="100%"
                        style ={{marginRight : "1rem"}}
                        multiline
                    /> 
                  
                </div>

                {/* <input
                  type="submit"
                  name="submit"
                  value="Submit"
                  className=" btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                /> */}
                <Button variant="contained" onClick={AddRepo}>
                  Submit
                </Button>

              </form>
            </div>
          }
          handleClose={handleCloseX}
        />
      )}
    </>
  );
}
