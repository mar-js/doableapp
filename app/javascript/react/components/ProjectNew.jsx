import ProjectForm from "./forms/ProjectForm"

export default function ProjectNew({ form, projectsPath }) {
  return (
    <>
      <h3>New Project</h3>
      <ProjectForm {...form} />
      <br />
      <div>
        <a href={projectsPath}>Back to projects</a>
      </div>
    </>
  )
}
