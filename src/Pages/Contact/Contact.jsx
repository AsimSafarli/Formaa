import React from 'react'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import * as Yup from 'yup'

function Contact() {
  const contactvalidation = () => {
    return Yup.object({
      firstName: Yup.string()
       .required('Required'),
      lastName: Yup.string()
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    })
  }

  return (
    <div className='flex flex-row items-center justify-center p-10 gap-x-10'>
      <div className="logo"><img src="Assets/logo.jpg" alt="" srcset="" /></div>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={contactvalidation()}
      >
        <Form className='flex flex-col items-center  justify-center w-36 '>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
          </div>
          <div className='flex items-center justify-center text-red-700'>  <ErrorMessage name="firstName" /></div>
         
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
          </div>
          <div className='flex items-center justify-center text-red-700'>
          <ErrorMessage name="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
          </div>
          <div className='flex items-center justify-center text-red-700'>
          <ErrorMessage name="email" /></div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Contact
