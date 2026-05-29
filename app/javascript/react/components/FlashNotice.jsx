export default function FlashNotice({ notice }) {
  if (!notice) return null

  return <p>{notice}</p>
}
