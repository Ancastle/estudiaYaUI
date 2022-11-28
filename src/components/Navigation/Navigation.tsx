import TechnologyTab, { techProps } from "./TechnologyTab";

const technologies = [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }];

function Navigation(): JSX.Element {
  return (
    <div className="navigation">
      {technologies.map((tech: techProps, i) => (
        <TechnologyTab key={i} name={tech.name} />
      ))}
    </div>
  );
}

export default Navigation;
