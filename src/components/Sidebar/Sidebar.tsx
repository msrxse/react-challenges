import './styles.css'

interface Components {
  [key: string]: ({ ...props }) => React.ReactElement
}

/**
 * SIDEBAR
 */
function Sidebar({ components }: { components: Components }) {
  const componentsToArray = []

  for (const [key, value] of Object.entries(components)) {
    componentsToArray.push({ key, value: value.displayName || value.name })
  }

  return (
    <div>
      <ul className="sidebar_main">
        {componentsToArray.map((each) => (
          <li key={each.key}>
            <a href={each.key}>{each.value}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
