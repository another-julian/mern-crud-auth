import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";

function Login() {
  const [showErrors, setShowErrors] = useState({
    all: false,
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isAuth, errors: loginErrors } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    //console.log(data);
    login(data);
  });

  useEffect(() => {
    const handleInput = (event) => {
      const { name } = event.target;
      console.log(name);
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

  useEffect(() => {
    if (isAuth) navigate("/tasks");
    else {
      setShowErrors({
        all: loginErrors ? true : false,
        email: loginErrors.some((error) => error.includes("email")),
        password: loginErrors.some((error) => error.includes("password")),
      });
    }
  }, [isAuth, loginErrors]);

  return (
    <div className="w-full max-w-96">
      <h2 className="mb-10 text-[1.5rem] text-center font-bold">Login Form</h2>
      <form
        onSubmit={onSubmit}
        className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-50  shadow-md rounded-lg px-10 py-10 mb-4 flex-col align-middle justify-center"
      >
        <div aria-live="polite">
          {showErrors.all
            ? loginErrors.map((error, index) => (
                <p key={index} className="mb-4 bg-red-500 p-2 text-white">
                  {error}
                </p>
              ))
            : null}
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2">
            Email
            <input
              className="shadow appearance-none border dark:border-none  dark:bg-gray-600 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="email"
              placeholder="e.g: another@email.dot"
              autoComplete="username"
              {...register("email", {
                required: true,
              })}
            />
          </label>

          {errors.email || showErrors.email ? (
            <p className="text-red-500 italic dark:text-red-300">
              Something wrong with this email!{" "}
              <span className="not-italic">🤔</span>.
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">
            Password
            <input
              className="shadow appearance-none border dark:border-none  dark:bg-gray-600 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="password"
              placeholder="current-password"
              autoComplete="current-password"
              {...register("password", {
                required: true,
              })}
            />
          </label>
          {errors.password || showErrors.password ? (
            <p className="text-red-500 italic dark:text-red-300">
              Please choose a good password, min 8 characters{" "}
              <span className="not-italic">😁</span>.
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mb-4">
          <p>
            Don't you hava an account?{" "}
            <Link
              className="hover:underline dark:text-bl text-blue-600 font-bold"
              to="/register"
            >
              Sing up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
