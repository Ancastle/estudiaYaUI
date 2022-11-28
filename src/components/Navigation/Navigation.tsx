import TechnologyTab from "./TechnologyTab";

const technologies = ["1"];

function Navigation() {
  return (
    <div className="navigation">
      {technologies.map(() => (
        <TechnologyTab />
      ))}
    </div>
  );
}

export default Navigation;
