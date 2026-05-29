import ProjectForm from "./forms/ProjectForm"

export default function ProjectEdit({ form, showPath, projectsPath }) {
  return (
    <>
      <h1>Editing Project</h1>
      <ProjectForm {...form} />
      <br />
      <div>
        <a href={showPath}>Show this project</a>
        {" | "}
        <a href={projectsPath}>Back to projects</a>
      </div>
    </>
  )
}
