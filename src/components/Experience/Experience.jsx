import React from "react";
import { experiences } from "../../constants/data";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-black to-blue-950 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full items-center">
        <div className="pb-8">
          <p className="text-4xl font-bold text-center">Experience</p>
          <p className="py-6 sm:text-2xl text-1xl text-center">
            {" "}
            My work experience as a software engineer and working on different
            companies and projects.
          </p>
        </div>
        <div className="py-5 sm:px-0">
          <Timeline className="flex flex-col sm:flex-row sm:items-center ">
            {experiences.map((experience, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {index !== experiences.length - 1 && <TimelineConnector style={{ background: 'cyan' }} />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} index={index} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
