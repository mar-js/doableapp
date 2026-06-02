export default function FormErrors({ title, messages }) {
  if (!messages?.length) return null

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  )
}
