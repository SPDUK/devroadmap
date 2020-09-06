import React, { useState } from 'react';
import roadmaps from '../roadmaps';

console.log(roadmaps);

const createRoadmapLink = ({ link, title }) => (
  <div key={link}>
    <a href={link}>{title}</a>
    <label>
      Completed
      <input type="checkbox" />
    </label>
  </div>
);

const createRoadMap = ({
  title,
  difficulties: { beginner, intermediate, advanced },
}) => (
  <div key={Math.random()}>
    Beginner:
    {beginner.map(createRoadmapLink)}
    <br />
    Intermediate:
    {intermediate.map(createRoadmapLink)}
    <br />
    Advanced:
    {advanced.map(createRoadmapLink)}
  </div>
);

const createRoadMapOption = ({ beginner, intermediate, advanced }) => {};

const Roadmap = () => {
  const [selectedRoadmaps, setSelectedRoadmaps] = useState([]);

  const createRoadMapOptions = roadmap => {
    const { title, difficulties } = roadmap;

    return (
      <div>
        <h1>{title}</h1>
        <button
          onClick={() => setSelectedRoadmaps([...selectedRoadmaps, roadmap])}
        >
          Select Roadmap
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Select options:</h1>
      {roadmaps.length && roadmaps.map(createRoadMapOptions)}
      <h1>Currently Chosen Options: </h1>
      {selectedRoadmaps.map(createRoadMap)}
    </div>
  );
};

export default Roadmap;
