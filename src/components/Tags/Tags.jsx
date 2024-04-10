import './Tags.scss'

function Tag({ tagsContent }) {
  return (
    <div className="Tags">
      {tagsContent.map((tag) => (
        <div className="Tags__tag" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  )
}
export default Tag
