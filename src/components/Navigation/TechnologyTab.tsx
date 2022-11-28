import React from "react";

export interface techProps {
  name: string;
}

const TechnologyTab: React.FC<techProps> = (props: techProps) => {
  const { name } = props;
  return (
    <div className="techtab">
      <h1>{name}</h1>
    </div>
  );
};

export default TechnologyTab;
