
import { Form, Link } from "react-router-dom";
import { SubmitBtn, FormInput } from "../components/index";

const Register = () => {
  return (
    <section className=" grid place-items-center h-screen">
      <Form method="post" className=" flex flex-col gap-y-4 card w-96 p-8 bg-base-100 shadow-lg">
        <h4 className=" font-bold text-4xl text-center"> Register </h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' />
        <div className="mt-4">
          <SubmitBtn text='Register'/>
        </div>
        <p className="text-center">
          {" "}
          Already a member  ?
          <Link
            className=" ml-2 link link-hover link-primary capitalize"
            to="/login"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register