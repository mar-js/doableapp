export default function TodoCard({
  domId,
  name,
  description,
  completed,
  priority,
  projectName,
  projectPath,
  viewPath,
  showViewLink
}) {
  return (
    <div id={domId}>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Description:</strong> {description}
      </div>
      <div>
        <strong>Completed:</strong> {String(completed)}
      </div>
      <div>
        <strong>Priority:</strong> {priority}
      </div>
      <div>
        <strong>Project:</strong> <a href={projectPath}>{projectName}</a>
      </div>
      {showViewLink && (
        <>
          <a href={viewPath}>View this todo</a>
          <hr />
        </>
      )}
    </div>
  )
}
