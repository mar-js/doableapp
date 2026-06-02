import DeleteButton from "../shared/delete_button"
import ProjectCard from "./card"

export default function ProjectsShow({
  project,
  editPath,
  projectsPath,
  destroyPath
}) {
  return (
    <>
      <h2>{project.name}</h2>
      <ProjectCard {...project} />
      <div>
        <a href={editPath}>Edit this project</a>
        {" | "}
        <a href={projectsPath}>Back to projects</a>
      </div>
      <DeleteButton action={destroyPath} label="Destroy this project" />
    </>
  )
}
