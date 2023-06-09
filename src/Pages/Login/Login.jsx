import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire("Login Successfully!");
        navigate("/");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="h-screen">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-40">
        <div className="flex items-center justify-center mt-6">
          <span className="w-1/3 pb-4 text-2xl font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white mb-8">
            Login
          </span>
        </div>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <div className="relative flex items-center mt-2">
              <button
                type="button"
                className="absolute right-3 focus:outline-none rtl:left-0 rtl:right-auto"
                onClick={handleShow}
              >
                {show ? (
                  <FaEyeSlash className="text-gray-500 text-2xl"></FaEyeSlash>
                ) : (
                  <FaEye className="text-gray-500 text-2xl"></FaEye>
                )}
              </button>

              <input
                type={show ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="*************"
                className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 "
              />
            </div>
          </div>

          <div className="mt-6">
            <input
              type="submit"
              value="Sign In"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 text-center cursor-pointer"
            />
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <SocialLogin></SocialLogin>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Do not have an account?{" "}
          <span className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
            <Link to="/signup">Create One</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
