import { SyntheticEvent, ChangeEvent, useState } from 'react'

interface Fields {
  username: string
  email: string
  password: string
}
type FieldsOptional = Partial<Fields>

const submitPost = async (fields: Fields) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { data: fields, message: 'Post have been saved', status: 201 }
}

/**
 * Develop a user registration form with dynamic validation
 *
 * Implement dynamic validation to provide real-time feedback to users as
 * they fill out the form, indicating any errors or missing information
 */
const FormValidations2 = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const [fields, setFields] = useState(initialState)
  const [pending, setPending] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [errors, setErrors] = useState<FieldsOptional>()

  const checkForErrors = (data: Fields): FieldsOptional => {
    let errors = {}
    if (!data.username) {
      errors = { ...errors, username: 'Username cannot be empty' }
    }
    if (!data.email) {
      errors = { ...errors, email: 'Email cannot be empty' }
    }
    if (!data.password) {
      errors = { ...errors, password: 'Password cannot be empty' }
    }
    return errors
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const errorData = checkForErrors(fields)
    if (Object.keys(errorData).length > 0) {
      return setErrors(errorData)
    }

    setPending(true)
    setCompleted(false)
    const sentMessage = await submitPost(fields)
    setPending(false)
    setCompleted(true)
    setFields(initialState)
    console.log(sentMessage)
  }
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: '' }) // rather remove the key!!
    setFields({ ...fields, [name]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Username: <input name="username" value={fields.username} onChange={handleOnChange} />
          {errors?.username && errors?.username}
        </label>
        <label>
          Email:
          <input name="email" value={fields.email} onChange={handleOnChange} />
          {errors?.email && errors?.email}
        </label>
        <label>
          Password:
          <input name="password" value={fields.password} onChange={handleOnChange} />
          {errors?.password && errors?.password}
        </label>
        {completed && 'Your post have been saved!'}
        <button disabled={pending} type="submit">
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
export default FormValidations2
