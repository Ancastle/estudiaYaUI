import React from "react";

export interface TechnologyTabProps {
  name: string;
}

const TechnologyTab: React.FC<TechnologyTabProps> = ({ name }) => {
  return (
    <div className="techtab">
      <h1>{name}</h1>
    </div>
  );
};

export default TechnologyTab;
