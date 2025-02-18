import { useState, FormEvent } from 'react'

/**
 * Implement a Dynamic Form with Field Arrays
 * Create a dynamic form that allows users to add or remove fields dynamically.
 */
const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: '' }])

  const handleOnChange = ({ value, idx }: { value: string; idx: number }) => {
    const newFields = [...fields]
    newFields[idx].value = value
    setFields(newFields)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('Form submitted', fields)
    setFields([{ value: '' }])
  }
  const handleAddField = () => {
    setFields([...fields, { value: '' }])
  }
  const handleRemoveField = (idx: number) => {
    const newFields = [...fields]
    newFields.splice(idx, 1)
    setFields(newFields)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul style={{ listStyleType: 'none' }}>
          {fields.map((each, index) => (
            <li key={index}>
              <input
                type="text"
                value={each.value}
                onChange={(event) => handleOnChange({ value: event.target.value, idx: index })}
              />
              <button type="button" onClick={() => handleRemoveField(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddField}>
          Add
        </button>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
export default DynamicForm
