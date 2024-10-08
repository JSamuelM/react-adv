import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { InputText } from '../components'

import '../styles/styles.css'

export const RegisterForkmikPage = () => {
  return (
    <div>
      <h1>RegisterFormikPage</h1>

      <Formik
        initialValues={{ name: '', email: '', password1: '', password2: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe de tener 2 caracteres como minimo')
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('El nombre es requerido'),
          email: Yup.string().email().required('Requerido'),
          password1: Yup.string()
            .min(6, 'Debe de tener 6 caracteres como minimo')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales')
            .required('Repetir contraseña')
        })}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <InputText label="Nombre" name="name" placeholder="Samuel" />

            <InputText
              label="Correo electronico"
              name="email"
              type="email"
              placeholder="john@domain.com"
            />

            <InputText
              label="Contraseña"
              name="password1"
              type="password"
              placeholder="******"
            />
            <InputText
              label="Repetir Contraseña"
              name="password2"
              type="password"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
