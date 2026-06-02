import ProjectCard from "./shared/ProjectCard"

export default function ProjectsIndex({ projects, newProjectPath }) {
  return (
    <>
      <h3>Projects</h3>
      <div id="Projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <a href={newProjectPath}>New project</a>
    </>
  )
}
