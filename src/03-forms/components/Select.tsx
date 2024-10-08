import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  placeholder?: string
  [x: string]: any
}

export const Select = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={`${props.id}` || `${props.name}`}>{label}</label>
      <select {...field} {...props}>
        {props.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {JSON.stringify(props)}
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
