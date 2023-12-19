import React from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required('First name là bắt buộc'),
  lastName: yup.string().required('Last name là bắt buộc'),
  email: yup.string().email().required('Email là bắt buộc'),
  age: yup.number().positive().integer().required('Age là bắt buộc'),
  password: yup.string().min(4).max(15).required('Password là bắt buộc'),
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
          <p> {errors.firstName?.message} </p>
          <input type="text" {...register('lastName')} placeholder="Last Name..." />
          <p> {errors.lastName?.message} </p>
          <input type="text" {...register('email')} placeholder="Email..." />
          <p> {errors.email?.message} </p>
          <input type="text" {...register('age')} placeholder="Age..." />
          <p> {errors.age?.message} </p>
          <input type="password" {...register('password')} placeholder="Password..." />
          <p> {errors.password?.message} </p>
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm Password..."
          />
          <p> {errors.confirmPassword?.message} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  )
}

export default MyForm
