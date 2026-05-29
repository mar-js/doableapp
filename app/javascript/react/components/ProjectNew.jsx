import ProjectForm from "./forms/ProjectForm"

export default function ProjectNew({ form, projectsPath }) {
  return (
    <>
      <h1>New Project</h1>
      <ProjectForm {...form} />
      <br />
      <div>
        <a href={projectsPath}>Back to projects</a>
      </div>
    </>
  )
}
