import React from "react";
import HeroImage from "../../assets/portfolio/Vihang.png";
import { Bio } from "../../constants/data";
import Typewriter from 'typewriter-effect';
import { SubTitle, TextLoop, Title, ResumeButton, HeroRightContainer, HeroLeftContainer } from ".";
import "./Home.css"; 

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-950 heroSectionPadding"
    >
      <div className="lg:px-20 mx-auto flex flex-col md:flex-row items-center justify-center h-full w-fit mainSection">
        <HeroLeftContainer>
          <Title>
            Hi, I am <br /> {Bio.name}
          </Title>
          <TextLoop>
            I am a
            <span className="text-cyan-500 font-bold cursor-pointer md:align-middle">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </TextLoop>
          <SubTitle>
            {Bio.description}
          </SubTitle>

            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>

        </HeroLeftContainer>

        <HeroRightContainer>
          <img
            className='rounded-full mx-auto border-2 border-cyan-500 img'
            src={HeroImage}
            alt="Vihang Profile Pic"
            
          />
        </HeroRightContainer>
      </div>
    </div>
  );
};

export default Home;
