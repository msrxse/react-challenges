import { useState, ChangeEvent } from 'react'

interface FormValues {
  username: string
  email: string
}
type FormValuesNotRequired = Partial<FormValues>

/**
 * Create a Reusable Form Component with Validation
 * Build a reusable form component that handles form state and validation for various form fields.
 */
const FormValidations = () => {
  const initialState = {
    username: '',
    email: '',
  }
  const [formFields, setFormFields] = useState(initialState)
  const [errors, setFormErrors] = useState<FormValuesNotRequired>(initialState)
  const handleSetFormFields = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setFormFields({ ...formFields, [name]: value })
  }
  const validate = (values: FormValues) => {
    const errors: FormValuesNotRequired = {}
    if (!values.username) {
      errors.username = 'Username cannot be empty'
    }
    if (!values.email) {
      errors.email = 'Email cannot be empty'
    }
    return errors
  }

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationsErrors = validate(formFields)
    setFormErrors(validationsErrors)

    if (Object.keys(validationsErrors).length === 0) {
      console.log('Sending form')
      setFormFields(initialState)
      return undefined
    }
  }

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleOnSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={formFields.username}
            onChange={handleSetFormFields}
          />
          {errors.username && errors.username}
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="text" value={formFields.email} onChange={handleSetFormFields} />
          {errors.email && errors.email}
        </div>
        <button type="submit">Send form</button>
      </form>
    </div>
  )
}

export default FormValidations
