import React, { useState } from 'react';
import roadmaps from '../roadmaps';
import CreateRoadmap from './CreateRoadmap';

const Roadmap = () => {
  const [selectedRoadmaps, setSelectedRoadmaps] = useState([]);

  const createRoadMapOptions = roadmap => {
    const { title, difficulties } = roadmap;

    return (
      <div key={title}>
        <h1>{title}</h1>
        <button
          onClick={() => {
            if (!selectedRoadmaps.includes(roadmap)) {
              setSelectedRoadmaps([...selectedRoadmaps, roadmap]);
            }
          }}
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
      {selectedRoadmaps.map(roadmap => (
        <CreateRoadmap roadmap={roadmap} />
      ))}
    </div>
  );
};

export default Roadmap;
