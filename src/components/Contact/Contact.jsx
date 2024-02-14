import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

export default function Contact() {
  let validationSchema = Yup.object({
    name:Yup.string().required('Name is Required').min(3, "Name must be at least 3 ").max(25,"Name must be at most 25"),
    email:Yup.string().required("Email is Required").email(),
    password: Yup.string().required('Password is Required').matches("^[A-Z][a-zA-Z0-9!@$#*^%*()_-]{3,16}$",'Invalid Password'),
    rePassword: Yup.string().required('rePassword is Required').oneOf([Yup.ref('password')],'rePassword must match Passsword'),
    phone: Yup.string().required('Phone is Required').matches("^01[1052][0-9]{8}$",'Invalid Phone Number'),
    age:Yup.number().required("Age is Required")
  })

  let formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      phone:"",
      age:"",
      password:"",
      rePassword:""
    },
    validationSchema,
    onSubmit:logger
  })
   function logger(){
    console.log(formik.values)
   }
  return (
    <>
    <form className='py-5 text-center'onSubmit={formik.handleSubmit}>
      <h2>Contact Us</h2>
    <div className="row py-5 g-3 d-flex justify-content-center">
      <div className="col-md-6">
        <input type="text" placeholder='Your Name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='name' className='form-control'/>
        {formik.errors.name && formik.touched.name ? <div className='alert alert-danger my-2 p-2'>{formik.errors.name}</div> : null }
      </div>
      <div className="col-md-6">
      <input type="email" placeholder='Your Email'onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' className='form-control'/>
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger my-2 p-2'>{formik.errors.email}</div> :null}
      </div>
      <div className="col-md-6">
      <input type="tel" placeholder='Your Phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name='phone' className='form-control'/>
      {formik.errors.phone && formik.touched.phone ?  <div className='alert alert-danger my-2 p-2'>{formik.errors.phone}</div> : null  }
      </div>
      <div className="col-md-6">
        <input type="number" name="age" id="age" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.age} className='form-control' placeholder="Your Age" />
        {formik.errors.age && formik.touched.age ? <div className='alert alert-danger my-2 p-2'>{formik.errors.age}</div> : null }
      </div>

      <div className="col-md-6">
      <input type="password" placeholder='Password'onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' className='form-control'/>
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger my-2 p-2'>{formik.errors.password}</div> : null }
      </div>
      <div className="col-md-6">
        <input type="password" placeholder='RePassword'onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} name='rePassword' className='form-control'/>
        {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger my-2 p-2'>{formik.errors.rePassword}</div> : null }

      </div>
    </div>

    <button type='submit'  disabled={!(formik.isValid && formik.dirty)} className='btn btn-outline-danger text-white flex-grow-0'>Submit</button>


    </form>
    </>
  )
}
