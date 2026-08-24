import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target='_blank' rel='noopener noreferrer'>
        View Project
      </a>
    </div>
  );
}
