import ProjectForm from "./form"

export default function ProjectsNew({ form, projectsPath }) {
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
