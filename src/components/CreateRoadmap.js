import React from 'react';
import RoadmapLink from './RoadmapLink';

const createRoadMap = ({ roadmap: { title, difficulties } }) => (
  <div key={Math.random()}>
    <h3>{title}</h3>
    {Object.keys(difficulties).map(key => (
      <div key={key}>
        <h3>{key}</h3>
        {difficulties[key].map(({ link, title }) => (
          <RoadmapLink link={link} title={title} />
        ))}
        <br />
      </div>
    ))}
    <hr />
  </div>
);

export default createRoadMap;
