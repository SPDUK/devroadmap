import React, { useState } from 'react';
import roadmaps from '../roadmaps';
import CreateRoadmap from './CreateRoadmap';
import useLocalStorage from '../hooks/useLocalStorage';

const Roadmap = () => {
  const [selectedRoadmaps, setSelectedRoadmaps] = useLocalStorage(
    'selectedRoadmaps',
    []
  );

  const createRoadMapOptions = roadmap => {
    const { title, difficulties } = roadmap;

    const isDisabled = selectedRoadmaps.find(r => r.title === title);

    return (
      <div key={title}>
        <h1>{title}</h1>
        <button
          type="button"
          disabled={isDisabled}
          onClick={() => {
            // TODO: this needs to use recoil! if updating this then the complete state doesn't carry over and removes any completed state
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
      {roadmaps && roadmaps.map(createRoadMapOptions)}
      <h1>Currently Chosen Options: </h1>
      {selectedRoadmaps.map(roadmap => (
        <CreateRoadmap roadmap={roadmap} />
      ))}
    </div>
  );
};

export default Roadmap;
