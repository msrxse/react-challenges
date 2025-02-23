import { useState } from 'react'

interface Dropdown {
  placeholder: string
  items: (string | number)[]
  onSelectionCb: (selection: { [x: string]: string | number }) => void
}

const Dropdown = ({ placeholder, items, onSelectionCb }: Dropdown) => {
  const [open, setOpen] = useState(false)
  const handleSelection = (selection: string | number) => {
    setOpen(false)
    return onSelectionCb({ [placeholder]: selection })
  }
  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)}>{placeholder}</button>
      {open && (
        <ul className="menu">
          {items.map((each) => (
            <li className="menu-item" key={each}>
              <button onClick={() => handleSelection(each)}>{each}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Dropdown
