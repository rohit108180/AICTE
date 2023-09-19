import React, { useEffect } from "react";
import secondaryImage from "../../assests/landingimage2.png";

import coverImage from "../../assests/landingCoverImage.png";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../MyHooks/useAuth";
import { useAppcontext } from "../../Context/context/appContext";

import Card from "../../Components/Card";
import CardComponent from "../../Components/Card";

export const Landing = () => {
  const { setLogin } = useAuth();
  const { user } = useAppcontext();

  const navigate = useNavigate();

  const initiatives = [
    {
      title: "National Doctoral Fellowship (NDF)",
      description:
        " NDF is a scheme to provide financial assistance to meritorious students pursuing Ph.D. in technical disciplines. It aims to promote research and development activities in India.",
      imageLink:
        "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fjobrule.com%2F2018%2F05%2Faicte-approved-ndf-admission-to-ph-d-programmes-for-academic-year-2018-2019.html&psig=AOvVaw35WrFqfQTeLtjKpicGobAG&ust=1695191443027000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCb0rCGtoEDFQAAAAAdAAAAABAJ",
      learnMoreLink:
        "https://www.aicte-india.org/content/national-doctoral-fellowship-ndf",
    },
    {
      title: "National Digital Library (NDL)",
      description:
        "NDL is a digital platform that provides access to a vast collection of academic resources, including textbooks, articles, and videos, to support learning and research.",
      imageLink:
        "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fndl.iitkgp.ac.in%2F&psig=AOvVaw1iuSpz8ZUb0uv9CcU2OGWg&ust=1695191558579000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCG4OeGtoEDFQAAAAAdAAAAABAE",
      learnMoreLink:
        "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-xtnvhraBAxUhbWwGHXsjBjIQFnoECA0QAQ&url=https%3A%2F%2Fndl.iitkgp.ac.in%2F&usg=AOvVaw18TBWrlUzTnpNhwgCtP6s6&opi=89978449",
    },
    {
      title: "AICTE Training and Learning (ATAL) Academy",
      description:
        "ATAL Academy offers online and offline courses, workshops, and training programs to enhance the technical and entrepreneurial skills of students and faculty members.",
      imageLink:
        "https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fmedia.umangapp.in%2Fapp%2Fico%2Fservice%2Fatalacademy.png&tbnid=KOyFaOYDZVIv1M&vet=12ahUKEwjU3beWh7aBAxXHTGwGHUIeB1UQMygAegQIARBR..i&imgrefurl=https%3A%2F%2Fweb.umang.gov.in%2Flanding%2Fdepartment%2Faicte-training-and-learning-atal-academy.html&docid=V6yLPtqZuw-8BM&w=245&h=206&q=AICTE%20Training%20and%20Learning%20(ATAL)%20Academy&hl=en&ved=2ahUKEwjU3beWh7aBAxXHTGwGHUIeB1UQMygAegQIARBR",
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

  useEffect(() => {
    if (user) {
      navigate("/Dashboard");
      setLogin(true);
    }
  }, [user, navigate]);
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="topPart">
        <img className="coverImage" src={coverImage} />
        <h1 className="tagLine">
          A unified portal for developing a model Curriculum for all the AICTE
          Approved Institutes.
        </h1>
        <img className="secondary-image" src={secondaryImage} />
      </div>
      <div className="section">
        <div className="section-heading">
          <h2>Initiative and Schemes</h2>
          <div className="borderline"> </div>
        </div>

        <div className="section-content">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>

      <div className="section">
        <div className="section-heading">
          <h2>Initiative and Schemes</h2>
          <div className="borderline"> </div>
        </div>

        <div className="section-content">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
};
