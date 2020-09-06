import React from 'react';

const RoadmapLink = ({ link, title }) => (
  <div key={Math.random()}>
    <a href={link}>{title}</a>
    <label>
      Completed
      <input type="checkbox" />
    </label>
  </div>
);

export default RoadmapLink;
