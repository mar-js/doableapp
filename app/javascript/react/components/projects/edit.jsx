import ProjectForm from "./form"

export default function ProjectsEdit({ form, showPath, projectsPath }) {
  return (
    <>
      <h3>Editing Project</h3>
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
