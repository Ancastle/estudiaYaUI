import TechnologyTab, { TechnologyTabProps } from "./TechnologyTab";

const technologies = [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }];

function Navigation(): JSX.Element {
  return (
    <div
      className="navigation"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {technologies.map((tech: TechnologyTabProps, i) => (
        <TechnologyTab key={i} name={tech.name} />
      ))}
    </div>
  );
}

export default Navigation;
