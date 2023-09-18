import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Main() {
  const { state } = useLocation();
  const { _id, Title, Desc, User } = state.Repo;
  const [Version, setVersion] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [Content, setContent] = useState(
    "<h3> This Repository is Currently Empty ... </h3>"
  );
  const navigate = useNavigate();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseX = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log(_id);
    const response = await axios.get(
      `http://localhost:5000/version/all/${state.Repo._id}`
    );
    setVersion(response.data);
    if (response.data.length > 0) {
      getContent(response.data);
    }
  };
  const getContent = async (array) => {
    const obj = array[array.length - 1];
    const response = await axios.get(
      `http://localhost:5000/version/${obj._id}`
    );
    console.log(response.data);
    setContent(response.data.Content);
  };
  const Edit = () => {
    state.Repo.Content = Content;
    navigate(`/Edit/${state.Repo.Title}`, { state: { Repo: state.Repo } });
  };
  const getCon = async (id) => {
    const response = await axios.get(`http://localhost:5000/version/${id}`);
    setContent(response.data.Content);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20, filter: "blur(5)"}}
    >
      <div className="col d-flex" style={{justifyContent: "space-between"}}>
        <div>
          <div className="col d-flex justify-content-end">
            <h3>Collaborators</h3>
          </div>
          <Stack direction="row" spacing={2} className="col d-flex justify-content-end"
            style={{marginBottom: "2rem"}}
          >
            <Avatar {...stringAvatar('Kent Dodds')} />
            <Avatar {...stringAvatar('Jed Watson')} />
            <Avatar {...stringAvatar('Tim Neutkens')} />
          </Stack>
        </div>
        <div>
          <Button variant="contained" onClick={togglePopup}>
            Versions
          </Button>
          &nbsp;&nbsp;
          <Button variant="outlined" onClick={Edit}>
            Edit
          </Button>
        </div>
      </div>

      <div>
        
        
      </div>

      {isOpen && (
        <Popup style={{zIndex: "1"}}
          content={
            <>
              <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                Versionitory Detail
              </h4>
              <table class="table" id="list">
                <thead>
                  <tr>
                    <th scope="col">Version</th>
                  </tr>
                </thead>
                <tbody>
                  {Version.map((Repo, index) => {
                    return (
                      <tr scope="row" key={Repo._id}>
                        <td onClick={() => getCon(Repo._id)}>
                          <div className="col d-flex justify-content-center">
                            <Button variant="contained" className="versionNumber">Version: {index + 1}</Button>
                          </div>
                        </td>
                        {console.log(Repo.Desc)}
                        {/* <td>{Repo.Desc}</td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          }
          handleClose={handleCloseX}
        />
      )}
      <div>
        <div className="col d-flex justify-content-center">
          <h1>{Title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: Content }}></div>
      </div>
    </div>
  );
}