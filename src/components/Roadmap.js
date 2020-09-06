import React from 'react'
import frontendRoadmap from "../roadmaps/frontend.json";

const { beginner, intermediate, advanced } = frontendRoadmap;

const createRoadmapLink = ({ link, title }) => {
  return (<div key={link}>
    <a href={link}>{title}</a>
  </div>)
}

const Roadmap = () => {
  return (
    <div>
      Beginner:
      {beginner.map(createRoadmapLink)}
      <br />
      Intermediate:
      {intermediate.map(createRoadmapLink)}
      <br />
    Advanced:
      {advanced.map(createRoadmapLink)}


    </div>
  )
}


export default Roadmap;