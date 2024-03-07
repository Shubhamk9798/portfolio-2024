import React from "react";
import "@components/Projects.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Img1 from "../assets/images/home/projects/shoes thumbnail/2.png";
import Img2 from "../assets/images/home/projects/shoes thumbnail/4.png";
import Img3 from "../assets/images/home/projects/shoes thumbnail/6.png";
import ImgLaptop from "../assets/images/home/projects/PngItem_451179.png";
import Img4 from "../assets/images/home/projects/shoe-store Thumbnail.jpg";
import Img6 from "../assets/images/home/projects/shoes thumbnail/Screenshot 2024-03-07 at 00-12-42 Online Shoe Store JS Dev Hindi.png";
import "../app/globals.css";
import ssq1 from "../assets/images/home/projects/ssquarethumbnail/Screenshot 2024-03-07 000622.jpg";
import ssq2 from "../assets/images/home/projects/ssquarethumbnail/2.png";
import ssq3 from "../assets/images/home/projects/ssquarethumbnail/3.png";
import ssq4 from "../assets/images/home/projects/ssquarethumbnail/4.png";
import ssq5 from "../assets/images/home/projects/ssquarethumbnail/5.png";

import real1 from "../assets/images/home/projects/realtor/1.png";
import real2 from "../assets/images/home/projects/realtor/2.png";
import real3 from "../assets/images/home/projects/realtor/3.png";

import gym1 from "../assets/images/home/projects/gym/3.png";
import gym2 from "../assets/images/home/projects/gym/4.png";
import gym3 from "../assets/images/home/projects/gym/Screenshot 2024-03-07 at 00-15-16 React App.png";
import gym4 from "../assets/images/home/projects/gym/Screenshot 2024-03-07 at 00-16-08 React App.png";

import "../app/home.module.css";
const Projects = () => {
  return (
    <>
      <div id="project" className="main-card-project3">
        <div className="container-left">
          <div>
            <Image className="laptop" src={ImgLaptop} />
          </div>
          <div className="main-container">
            <Marquee className="rfm-marquee-container" direction="left">
              <Image className="Image-project" src={Img2} />
              <Image className="Image-project" src={Img1} />
              <Image className="Image-project" src={Img3} />
              <Image className="Image-project" src={Img4} />
              <Image className="Image-project" src={Img6} />
            </Marquee>
          </div>
        </div>
        <div className="right-container">
          <h1 className="heading gradient-text">Shoe Store</h1>
          <p className="infosectionDescriptio text-center">
            This Is An E-commerce Project For Shoe-selling Online{" "}
          </p>
          <h2 className="subheading gradient-text">
            Tech Stacks Used In This Project
          </h2>
          <p className="stacks sectionDescriptio">
            Html, Css, JavaScript, React, TailwindCss , Strapy Headless CMS
            STRIPE as Payment Integration Provider
          </p>
          <a href="https://shoe-store-n-frontend.vercel.app/">
            <h1 className="gradient-btn btn">Live Preview</h1>
          </a>
        </div>
      </div>

      <div className="main-card-project3">
        <div className="left-container2 ">
          <h1 className="heading gradient-text">SSquareIT Solutions</h1>
          <p className="infosectionDescriptio text-center">
            This Is An Online Course Selling Platform{" "}
          </p>
          <h2 className=" subheading gradient-text">
            Tech Stacks Used In This Project
          </h2>
          <p className="stacks sectionDescriptio">
            Html, Css, JavaScript, React, TailwindCss , Graphql Hygraph CMS
            STRIPE as Payment Integration Provider
          </p>
          <a href="https://today-ecru.vercel.app/">
            <h1 className="gradient-btn btn">Live Preview</h1>
          </a>
        </div>
        <div className="right-container2">
          <div>
            <Image className="laptop" src={ImgLaptop} />
          </div>
          <div className="main-container">
            <Marquee className="rfm-marquee-container" direction="right">
              <Image className="Image-project" src={ssq1} />
              <Image className="Image-project" src={ssq2} />
              <Image className="Image-project" src={ssq3} />
              <Image className="Image-project" src={ssq4} />
              <Image className="Image-project" src={ssq5} />
            </Marquee>
          </div>
        </div>
      </div>
      <div className="main-card-project3">
        <div className="container-left">
          <div>
            <Image className="laptop" src={ImgLaptop} />
          </div>
          <div className="main-container">
            <Marquee className="rfm-marquee-container" direction="left">
              <Image className="Image-project" src={real1} />
              <Image className="Image-project" src={real2} />
              <Image className="Image-project" src={real3} />
            </Marquee>
          </div>
        </div>
        <div className="right-container">
          <h1 className="heading gradient-text">Realtor</h1>
          <p className="infosectionDescriptio text-center">
            Online Property Selling And Renting Platform
          </p>
          <h2 className="subheading gradient-text">
            Tech Stacks Used In This Project
          </h2>
          <p className="stacks sectionDescriptio">
            Html, Css, JavaScript, React, TailwindCss , Rapid Api STRIPE as
            Payment Integration Provider
          </p>
          <a target="_blank" href="https://real-estate-dun-kappa.vercel.app/">
            <h1 className="gradient-btn btn">Live Preview</h1>
          </a>
        </div>
      </div>

      <div className="main-card-project3">
        <div className="left-container2">
          <h1 className="heading gradient-text">Gold's Gym </h1>
          <p className=" infosectionDescriptio text-center">
            This is a Fitness app For Healthy Lifestyle
          </p>
          <h2 className="subheading gradient-text">
            Tech Stacks Used In This Project
          </h2>
          <p className="stacks sectionDescriptio">
            Html, Css, JavaScript, React, TailwindCss , Rapid Api STRIPE as
            Payment Integration Provider
          </p>
          <a href="https://gym-one-gules.vercel.app/">
            <h1 className="gradient-btn btn">Live Preview</h1>
          </a>
        </div>
        <div className="right-container2">
          <div>
            <Image className="laptop" src={ImgLaptop} />
          </div>
          <div className="main-container">
            <Marquee className="rfm-marquee-container" direction="left">
              <Image className="Image-project" src={gym1} />
              <Image className="Image-project" src={gym2} />
              <Image className="Image-project" src={gym3} />
              <Image className="Image-project" src={gym3} />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
