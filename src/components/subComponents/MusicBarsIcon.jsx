import React from 'react';

const MusicBarsIcon = () => {
  return (
    <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="15" width="4" height="10" fill="#6a0dad">
        <animate attributeName="height" values="10;20;5;10" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y" values="15;5;20;15" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="15" y="15" width="4" height="10" fill="#6a0dad">
        <animate attributeName="height" values="10;15;7;10" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="y" values="15;10;18;15" dur="2.2s" repeatCount="indefinite" />
      </rect>
      <rect x="25" y="15" width="4" height="10" fill="#6a0dad">
        <animate attributeName="height" values="10;20;5;10" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="y" values="15;5;20;15" dur="1.8s" repeatCount="indefinite" />
      </rect>
      <rect x="35" y="15" width="4" height="10" fill="#6a0dad">
        <animate attributeName="height" values="10;17;8;10" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="y" values="15;8;17;15" dur="2.4s" repeatCount="indefinite" />
      </rect>
      <rect x="45" y="15" width="4" height="10" fill="#6a0dad">
        <animate attributeName="height" values="10;20;5;10" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y" values="15;5;20;15" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
};

export default MusicBarsIcon;
