import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Checkbox, InputText, Select } from '../components'

import '../styles/styles.css'

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe de tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Debe ser un correo valido')
            .required('Requerido'),
          terms: Yup.boolean()
            .isTrue('Debe aceptar terminos y condiciones')
            .required(),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opcion no es permitida.')
            .required('Requerido')
        })}
      >
        {(formik) => (
          <Form noValidate>
            <InputText
              label="First Name"
              name="firstName"
              placeholder="Samuel"
            />

            <InputText label="Last Name" name="lastName" placeholder="Mena" />

            <InputText
              label="Email Address"
              name="email"
              placeholder="example@domain.com"
              type="email"
            />

            <Select name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </Select>

            <Checkbox label="Termns & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
