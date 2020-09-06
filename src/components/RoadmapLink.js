import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const RoadmapLink = ({
  roadmapTitle,
  difficulty,
  link: { link, title, completed },
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [selectedRoadmaps, setSelectedRoadmaps] = useLocalStorage(
    'selectedRoadmaps',
    []
  );

  function updateCompleted(evt) {
    setIsCompleted(!isCompleted);

    // update completed on all

    const roadmapToUpdateIdx = selectedRoadmaps.findIndex(
      rmap => rmap.title === roadmapTitle
    );
    const roadmapToUpdate = selectedRoadmaps[roadmapToUpdateIdx];

    const itemToUpdate = roadmapToUpdate.difficulties[difficulty].find(
      item => item.title === title
    );

    itemToUpdate.completed = !isCompleted;
    setSelectedRoadmaps(selectedRoadmaps);
  }

  return (
    <div key={Math.random()}>
      <a href={link}>{title}</a>
      <label>
        Completed
        <input
          type="checkbox"
          checked={isCompleted}
          value={isCompleted}
          onChange={updateCompleted}
        />
      </label>
    </div>
  );
};

export default RoadmapLink;
