import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPeopleArrows,
  FaAddressCard,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaLink,
  FaLock,
  FaMobile,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserProfile(createdUser, data.name, data.photoUrl);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
  };

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };
  const handleConfirmPasswordShow = () => {
    setConfirmPasswordShow(!confirmPasswordShow);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="container flex  justify-center min-h-screen px-6 mx-auto pb-20">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center justify-center mt-6">
                <span className="w-1/3 pb-2 text-2xl font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white mb-8">
                  Sign Up
                </span>
              </div>

              <div className="relative flex items-center mt-5">
                <span className="absolute">
                  <FaUser className="text-gray-300 text-2xl ml-3"></FaUser>
                </span>

                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Full Name"
                />
              </div>

              {/* Error messages */}
              {errors.name?.type === "required" && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  Name is required.
                </span>
              )}

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <FaEnvelope className="text-gray-300 text-2xl ml-3"></FaEnvelope>
                </span>

                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>

              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  Email is required.
                </span>
              )}

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaLock className="text-gray-300 text-2xl ml-3"></FaLock>
                </span>

                <button
                  type="button"
                  className="absolute right-3 focus:outline-none "
                  onClick={handlePasswordShow}
                >
                  {passwordShow ? (
                    <FaEyeSlash className="text-gray-300 text-2xl"></FaEyeSlash>
                  ) : (
                    <FaEye className="text-gray-300 text-2xl"></FaEye>
                  )}
                </button>
                <input
                  type={passwordShow ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 characters long.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
                      message:
                        "Password should contain at least one capital letter and one special character (!@#$%^&*).",
                    },
                  })}
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaLock className="text-gray-300 text-2xl ml-3"></FaLock>
                </span>

                <button
                  type="button"
                  className="absolute right-3 focus:outline-none "
                  onClick={handleConfirmPasswordShow}
                >
                  {confirmPasswordShow ? (
                    <FaEyeSlash className="text-gray-300 text-2xl"></FaEyeSlash>
                  ) : (
                    <FaEye className="text-gray-300 text-2xl"></FaEye>
                  )}
                </button>
                <input
                  type={confirmPasswordShow ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Confirm Password"
                />
              </div>
              {/* Error messages */}
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  {errors.password.message}
                </span>
              )}

              {/*  */}

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <FaLink className="text-gray-300 text-2xl ml-3"></FaLink>
                </span>

                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Photo Url"
                />
              </div>

              {errors.photoUrl?.type === "required" && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  PhotoUrl is required.
                </span>
              )}

              {/*  */}

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <FaAddressCard className="text-gray-300 text-2xl ml-3"></FaAddressCard>
                </span>

                <input
                  type="text"
                  {...register("address")}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Address"
                />
              </div>

              <div className="md:flex gap-3">
                <div className="relative flex items-center mt-8">
                  <span className="absolute">
                    <FaMobile className="text-gray-300 text-2xl ml-3"></FaMobile>
                  </span>

                  <input
                    type="text"
                    {...register("phoneNumber")}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="relative flex items-center mt-8">
                  <span className="absolute">
                    <FaPeopleArrows className="text-gray-300 text-2xl ml-3" />
                  </span>
                  <select
                    {...register("gender")}
                    defaultValue="Gender" // Set the initial value here
                    className="block w-full py-3 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-gray-400"
                  >
                    <option disabled value="Gender">
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className={`w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 text-center cursor-pointer ${
                    password !== confirmPassword
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={password !== confirmPassword}
                />
              </div>
            </form>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or Continue with Social Media
              </a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
              <button
                type="button"
                className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
              >
                <FaGoogle></FaGoogle>

                <span className="hidden mx-2 sm:inline">
                  Sign in with Google
                </span>
              </button>
            </div>

            <div className="mt-6 text-center ">
              <p className="mt-8 text-xs font-light text-center text-gray-400">
                {" "}
                Already have an account?{" "}
                <span className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
                  <Link to="/login    ">Login Here</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
