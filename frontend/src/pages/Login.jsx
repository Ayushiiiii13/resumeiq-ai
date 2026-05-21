import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const savedUser =
      JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {

      localStorage.setItem("loggedIn", "true");

      navigate("/dashboard");

    } else {

      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-5 bg-[#f8fafc]">

      <div className="col-span-3 bg-gradient-to-br from-purple-700 to-purple-500 text-white p-20 flex flex-col justify-center">

        <div className="max-w-2xl">

          <div className="bg-white/20 px-5 py-2 rounded-full inline-block backdrop-blur-sm">
            AI-Powered Resume Analyzer
          </div>

          <h1 className="text-7xl font-bold leading-tight mt-8">
            Improve Your Resume With Smart ATS Analysis
          </h1>

          <p className="text-2xl leading-10 mt-8 text-purple-100">
            Upload resumes, analyze ATS scores, detect skill gaps,
            and generate AI-powered improvement suggestions instantly.
          </p>

        </div>

      </div>

      <div className="col-span-2 flex items-center justify-center p-12 bg-white">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <h1 className="text-5xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Login to continue using ResumeIQ AI.
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >

            <div>

              <label className="text-gray-700 font-medium">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                placeholder="Enter your email"
              />

            </div>

            <div>

              <label className="text-gray-700 font-medium">
                Password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                placeholder="Enter your password"
              />

            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5 rounded-2xl text-xl font-semibold transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">

            Don’t have an account?{" "}

            <Link
              to="/signup"
              className="text-purple-700 font-semibold"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;