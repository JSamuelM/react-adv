import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [x: string]: unknown
}

export const InputText = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={`${props.id}` || `${props.name}`}>{label}</label>
      <input className="text-input" type="text" {...field} {...props} />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
