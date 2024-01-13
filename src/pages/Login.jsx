import { Form, Link } from "react-router-dom";
import { SubmitBtn, FormInput } from "../components/index";

const Login = () => {
  return (
    <section className=" grid place-items-center h-screen">
      <Form
        method="post"
        className=" card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className=" text-3xl text-center font-bold">Login</h4>
        <FormInput
          type="email"
          name="identifier"
          label="email"
          DefaultValue="test@gmail.com"
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          DefaultValue="secert"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className=" btn btn-secondary btn-block">guest user</button>
        <p className="text-center">
          {" "}
          not a member yet ?
          <Link
            className=" ml-2 link link-hover link-primary capitalize"
            to="/register"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
