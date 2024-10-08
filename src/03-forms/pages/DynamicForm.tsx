import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import formJson from '../data/custom-form.json'
import { InputText, Select } from '../components'

interface Fields {
  [key: string]: React.JSX.Element
}

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue
  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 1,
        `Min de ${(rule as any).value} caracteres`
      )
    }
    if (rule.type === 'email') {
      schema = schema.email('El correo debe ser valido')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

console.log(initialValues)

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              const fields: Fields = {
                input: (
                  <InputText
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                ),
                email: (
                  <InputText
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                ),
                select: (
                  <Select
                    key={name}
                    label={label}
                    name={name}
                    options={options}
                  />
                )
              }

              return fields[type]

              // * Initial
              // if (type === 'input' || type === 'password' || type === 'email') {
              //   return (
              //     <InputText
              //       key={name}
              //       type={type as any}
              //       name={name}
              //       label={label}
              //       placeholder={placeholder}
              //     />
              //   )
              // } else if (type === 'select') {
              //   return (
              //     <Select key={name} label={label} name={name}>
              //       <option value="" defaultChecked disabled>
              //         Select an option
              //       </option>
              //       {options?.map(({ id, label }) => (
              //         <option key={id} value={id}>
              //           {label}
              //         </option>
              //       ))}
              //     </Select>
              //   )
              // }

              // throw new Error(`El type: ${type}, no es soportado`)
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
