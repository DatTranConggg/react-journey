import React from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), undefined]),
})

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // connect yup to form validation
  })

  const handleSubmitform = (data: any) => {
    console.log(data)
  }

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(handleSubmitform)}>
          <input type="text" {...register('firstName')} placeholder="First Name..." />
          <input type="text" {...register('lastName')} placeholder="Last Name..." />
          <input type="text" {...register('email')} placeholder="Email..." />
          <input type="text" {...register('age')} placeholder="Age..." />
          <input type="password" {...register('password')} placeholder="Password..." />
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm Password..."
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  )
}

export default MyForm
