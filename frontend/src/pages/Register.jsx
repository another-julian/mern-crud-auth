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

  const { signup, isAuth, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/tasks");
    else {
      setShowErrors((prev) => ({
        all: registerErrors,
        email: registerErrors.some((error) => error.includes("email")),
        username: registerErrors.some((error) => error.includes("username")),
        password: registerErrors.some((error) => error.includes("password")),
      }));
    }
  }, [isAuth, registerErrors]);

  const onChangeInput = (event) => {
    const { name } = event.target;
    setShowErrors((prev) => ({
      ...prev,
      [name]: false,
      all: false,
    }));
  };

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    signup(values);
  });

  return (
    <div className="w-full max-w-96">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {showErrors.all
          ? registerErrors.map((error, index) => (
              <div key={index} className="mb-4 bg-red-500 p-2 text-white">
                {error}
              </div>
            ))
          : null}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="e.g: another"
            {...register("username", {
              required: true,
              onChange: onChangeInput,
            })}
          />
          {errors.username ? (
            <p className="text-red-500 italic">
              You Forgot put a user name!! 😨.
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="e.g: another@email.dot"
            {...register("email", { required: true, onChange: onChangeInput })}
          />
          {errors.email || showErrors.email ? (
            <p className="text-red-500 italic">
              Something wrong with this email!{" "}
              <span className="not-italic">🤔</span>.
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            {...register("password", {
              required: true,
              onChange: onChangeInput,
            })}
          />
          {errors.password || showErrors.password ? (
            <p className="text-red-500 italic">
              Please choose a good password, min 8 characters{" "}
              <span className="not-italic">😁</span>.
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
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
