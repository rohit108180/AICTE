// import React,{useEffect} from 'react'
import secondaryImage from "../../assests/landingimage2.png";

import coverImage from "../../assests/landingCoverImage.png";
import "./Landing.css";
// import { useNavigate } from "react-router-dom";
import useAuth from "../../MyHooks/useAuth";
import { useAppcontext } from "../../Context/context/appContext";

// import Card from '../../Components/Card'
import CardComponent from "../../Components/Card";

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
  const { user, addBookmark } = useAppcontext();

  useEffect(() => {
    if(user)getData();
  }, []);

  const navigate = useNavigate();

  const initiatives = [
    {
      title: "National Doctoral Fellowship (NDF)",
      description:
        " NDF is a scheme to provide financial assistance to meritorious students pursuing Ph.D. in technical disciplines. It aims to promote research and development activities in India.",
      imageLink:
        "https://scholarshiparena.in/wp-content/uploads/2021/08/AICTE-National-Doctoral-Fellowship.webp",
      learnMoreLink:
        "https://www.aicte-india.org/content/national-doctoral-fellowship-ndf",
    },
    {
      title: "National Digital Library (NDL)",
      description:
        "NDL is a digital platform that provides access to a vast collection of academic resources, including textbooks, articles, and videos, to support learning and research.",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/National_Digital_Library_of_India.png",
      learnMoreLink:
        "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-xtnvhraBAxUhbWwGHXsjBjIQFnoECA0QAQ&url=https%3A%2F%2Fndl.iitkgp.ac.in%2F&usg=AOvVaw18TBWrlUzTnpNhwgCtP6s6&opi=89978449",
    },
    {
      title: "AICTE Training and Learning (ATAL) Academy",
      description:
        "ATAL Academy offers online and offline courses, workshops, and training programs to enhance the technical and entrepreneurial skills of students and faculty members.",
      imageLink:
        "https://iitpkd.ac.in/sites/default/files/2021-12/atal_1.png",
      learnMoreLink:
        "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiF6quNh7aBAxU-T2wGHRTFCY0QFnoECA8QAQ&url=https%3A%2F%2Fwww.aicte-india.org%2Fatal&usg=AOvVaw2kFv3GTQ_f-ax8jy7-jG35&opi=89978449",
    },
  ];

  const news = [
    {
      title:
        "AICTE facilitates Indo-Taiwan collaboration to boost semiconductor sector",
      description:
        "AICTE stated that the Indo-Taiwan partnership will boost skill development, student exchange programmes, and collaborative research and development efforts.",
      imageLink:
        "https://cache.careers360.mobi/media/article_images/2023/9/18/AICTE-INDO-TAIWAN-AGREEMENT-featured-image.jpg",
      learnMoreLink:
        "https://news.careers360.com/aicte-facilitates-indo-taiwan-collaboration-boost-semiconductor-sector",
    },
    {
      title:
        "Raise awareness on increase in population: AICTE to universities ",
      description:
        "The All India Council for Technical Education (AICTE) has asked universities and institutes to raise awareness about the impact of population explosion, including food insecurity and loss of biodiversity. India's population is expected to surpass China's on July 1, 2022. AICTE stressed the need for balance between population growth and the capacity of Earth's ecosystems. The communication follows a directive from the government, but participation in awareness activities is voluntary. ",
      imageLink:
        "https://www.hindustantimes.com/ht-img/img/2023/09/15/550x309/In-its-communique-on-Friday--the-AICTE-stressed-on_1694804900763.jpg ",
      learnMoreLink:
        "https://www.hindustantimes.com/india-news/raise-awareness-on-increase-in-population-aicte-to-universities-101694804907334.html",
    },
    {
      title:
        "AICTE Grants Accreditation to Bhartiya Shiksha Board as a Pan-India Education Body",
      description:
        "AICTE has granted accreditation to the Bhartiya Shiksha Board (BSB) as a nationwide school education authority, urging all affiliated engineering and technical colleges to validate BSB. Check notice pdf here",
      imageLink:
        "https://img.jagranjosh.com/images/2023/September/1892023/bhartiya-shiksha-board.jpg",
      learnMoreLink:
        "https://www.jagranjosh.com/news/aicte-grants-accreditation-to-bhartiya-shiksha-board-as-a-pan-india-education-body-170504 ",
    },
  ];

  const [Repos, setRepos] = useState([]);





  const getData = async () => {
    const response = await axios.get("https://aicte-portal-backend.onrender.com/Repos/view/all");
    setRepos(response.data);
  };

  const Versions = (Repo) => {
    navigate(`/${Repo.Title}`, { state: { Repo } });
  };

  useEffect(() => {
    if (user) {
      // navigate('/Dashboard');
      setLogin(true);
    }
  }, [user, navigate]);
  return (
    <div style={{ marginTop: "53px" }}>
      <div className="topPart">
        <img className="coverImage" src={coverImage} />
        <h1 className="tagLine">
          A unified portal for developing a model Curriculum for all the AICTE
          Approved Institutes.
        </h1>
        <img className="secondary-image" src={secondaryImage} />
      </div>

{user &&
      <div className="section">
        <div className="section-heading">
          <h2>On going Projects</h2>
          <div className="borderline"> </div>
        </div>
        <div className="section-content">
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
                  <Typography
                    sx={{ height: 150 }}
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    {Repo.Title}
                  </Typography>
                  <Typography
                    sx={{ height: 150 }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {Repo.Desc.length > 200
                      ? Repo.Desc.substring(0, 200) + "..."
                      : Repo.Desc}
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
                    onClick={() => {
                      addBookmark(Repo._id);
                    }}
                  >
                    Bookmark
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
        }
      <div className="section">
        <div className="section-heading">
          <h2>Initiative and Schemes</h2>
          <div className="borderline"> </div>
        </div>

        <div className="section-content">
          {initiatives.map((initiative) => {
            return <CardComponent details={initiative} />;
          })}
        </div>
      </div>

      <div className="section">
        <div className="section-heading">
          <h2>Latest News</h2>
          <div className="borderline"> </div>
        </div>

        <div className="section-content">
          {
            news.map((news)=>{
              return <CardComponent details={news} />
            })
          }
        </div>
      </div>
    </div>
  );
};
