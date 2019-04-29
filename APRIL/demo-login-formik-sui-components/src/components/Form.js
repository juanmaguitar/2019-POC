/* eslint-disable react/prop-types, no-unused-vars */

import React from 'react'
import {withFormik, Field} from 'formik'
import * as Yup from 'yup'
import MoleculeField from '@s-ui/react-molecule-field'
import AtomInput from '@s-ui/react-atom-input'
import AtomButton from '@schibstedspain/sui-atom-button'

import './index.scss'

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  isSubmitting
}) => (
  <form className="FormWithFormik" onSubmit={handleSubmit}>
    <div className="FormWithFormik-fieldset">
      <div className="FormWithFormik-field">
        <MoleculeField
          label="Email"
          name="email"
          helpText="Write your email"
          errorText={touched.email && errors.email}
          successText={
            touched.email && !errors.email && 'Everything OK with this email'
          }
        >
          <AtomInput
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={(ev, {value}) => handleChange(ev)}
          />
        </MoleculeField>
      </div>
      <div className="FormWithFormik-field">
        <MoleculeField
          label="Password"
          name="password"
          helpText="Write your password"
          errorText={touched.password && errors.password}
          successText={
            touched.password &&
            !errors.password &&
            'Everything OK with this password'
          }
        >
          <AtomInput
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={(ev, {value}) => handleChange(ev)}
          />
        </MoleculeField>
      </div>
    </div>
    <AtomButton disabled={isSubmitting} type="primary">
      Login
    </AtomButton>
  </form>
)

const FormWithFormik = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string()
      .min(9, 'Password must be 9 characters or longer')
      .required('Password is required')
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({email: 'That email is already taken'})
      } else {
        window.alert(JSON.stringify(values, null, 2))
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  }
})(Form)

FormWithFormik.displayName = 'FormWithFormik'

export default FormWithFormik
