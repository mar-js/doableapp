export default function ProjectCard({ domId, name, active, viewPath, showViewLink }) {
  return (
    <div id={domId}>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Active:</strong> {String(active)}
      </div>
      {showViewLink && (
        <>
          <a href={viewPath}>View this project</a>
          <hr />
        </>
      )}
    </div>
  )
}
