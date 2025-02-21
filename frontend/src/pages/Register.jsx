import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Register() {
  const [showErrors, setShowErrors] = useState({
    all: false,
    email: false,
    username: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuth, errors: signupErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    //console.log(data);
    signup(data);
  });

  useEffect(() => {
    if (isAuth) navigate("/tasks");
    else {
      setShowErrors((prev) => ({
        all: signupErrors,
        email: signupErrors.some((error) => error.includes("email")),
        username: signupErrors.some((error) => error.includes("username")),
        password: signupErrors.some((error) => error.includes("password")),
      }));
    }
  }, [isAuth, signupErrors]);

  useEffect(() => {
    const handleInput = (event) => {
      const { name } = event.target;
      //console.log(name);
      setShowErrors((prev) => ({
        ...prev,
        [name]: false,
        all: false,
      }));
    };

    document.addEventListener("input", handleInput);

    return () => {
      document.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div className="w-full max-w-96">
      <h2 className="mb-10 text-[1.5rem] text-center font-bold">
        Register form
      </h2>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded-lg px-10 py-10 mb-4 flex-col align-middle justify-center"
      >
        <div aria-live="polite">
          {showErrors.all
            ? signupErrors.map((error, index) => (
                <p key={index} className="mb-4 bg-red-500 p-2 text-white">
                  {error}
                </p>
              ))
            : null}
          {errors ? <div></div> : null}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="username"
          >
            Username
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="text"
              placeholder="e.g: another"
              {...register("username", {
                required: true,
              })}
            />
          </label>

          {errors.username ? (
            <p className="text-red-500 italic">
              You Forgot put a user name!! 😨.
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="email"
              placeholder="e.g: another@email.dot"
              {...register("email", {
                required: true,
              })}
            />
          </label>

          {errors.email || showErrors.email ? (
            <p className="text-red-500 italic">
              Something wrong with this email!{" "}
              <span className="not-italic">🤔</span>.
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="password"
              placeholder="******************"
              {...register("password", {
                required: true,
              })}
            />
          </label>
          {errors.password || showErrors.password ? (
            <p className="text-red-500 italic">
              Please choose a good password, min 8 characters{" "}
              <span className="not-italic">😁</span>.
            </p>
          ) : null}
        </div>
        <div className="">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default Register;
