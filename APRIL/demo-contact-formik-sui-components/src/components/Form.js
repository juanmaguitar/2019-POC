/* eslint-disable react/prop-types, no-unused-vars */

import React from 'react'
import {withFormik, Field} from 'formik'
import * as Yup from 'yup'

import MoleculeTextareaField from './sui-components/components/molecule/textareaField/src'
import AtomTextarea from '@s-ui/react-atom-textarea'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import AtomButton from '@schibstedspain/sui-atom-button'

import withCharacterCount from './hoc/withCharacterCount'

import './index.scss'

const Textarea = withCharacterCount(AtomTextarea)


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

        <MoleculeInputField 
          id="name"
          label="Name"
          value={values.name}
          placeholder="Name"
          helpText="Write your name"
          errorText={touched.name && errors.name}
          successText={
            touched.name && !errors.name && 'Everything OK with this name'
          }
          onChange={(ev, {value}) => handleChange(ev)}
        />
          
      </div>
      <div className="FormWithFormik-field">

        <MoleculeInputField 
          id="email"
          label="Email"
          value={values.email}
          placeholder="Email"
          helpText="Write your email"
          errorText={touched.email && errors.email}
          successText={
            touched.email && !errors.email && 'Everything OK with this email'
          }
          onChange={(ev, {value}) => handleChange(ev)}
        />

      </div>
    </div>
    <div className="FormWithFormik-fieldset">
      <div className="FormWithFormik-field">

        <MoleculeTextareaField
          id="message"
          label="Message"
          name='message'
          value={values.message}
          helpText="Write your message"
          errorText={touched.message && errors.message}
          successText={
            touched.message &&
            !errors.message &&
            'Everything OK with this message'
          }
          placeholder="Message"
          onChange={ ev => {
            console.log(ev)
            handleChange(ev)
          }}
        />

       

        {
          /*
          <Textarea
            placeholder="MoleculeTextarea Message..."
            onChange={(ev, {value}) => {
              ev.persist()
              console.log(ev, {value})
              handleChange(ev)}
            }
          />
          */
        }


      </div>
    </div>
    <AtomButton disabled={isSubmitting} type="primary">
      Login
    </AtomButton>
  </form>
)

const FormWithFormik = withFormik({
  mapPropsToValues({email, name, message}) {
    return {
      email: email || '',
      name: name || '',
      message: message || ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(9, 'Name must be 9 characters or longer')
      .required('Name is required'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    message: Yup.string()
      .min(9, 'Message must be 9 characters or longer')
      .required('Message is required')
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
