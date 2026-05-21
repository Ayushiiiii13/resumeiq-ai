import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-5 bg-[#f8fafc]">

      <div className="col-span-3 bg-gradient-to-br from-purple-700 to-purple-500 text-white p-20 flex flex-col justify-center">

        <div className="max-w-2xl">

          <div className="bg-white/20 px-5 py-2 rounded-full inline-block backdrop-blur-sm">
            Join ResumeIQ AI
          </div>

          <h1 className="text-7xl font-bold leading-tight mt-8">
            Build ATS-Optimized Resumes With AI
          </h1>

          <p className="text-2xl leading-10 mt-8 text-purple-100">
            Create your ResumeIQ account and unlock smart ATS scoring,
            AI-powered resume feedback, skill analysis, and career insights.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10">

              <h2 className="text-5xl font-bold">
                AI
              </h2>

              <p className="mt-3 text-purple-100">
                Resume Analysis
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10">

              <h2 className="text-5xl font-bold">
                ATS
              </h2>

              <p className="mt-3 text-purple-100">
                Smart Scoring
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10">

              <h2 className="text-5xl font-bold">
                ⚡
              </h2>

              <p className="mt-3 text-purple-100">
                Instant Reports
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="col-span-2 flex items-center justify-center p-12 bg-white">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <h1 className="text-5xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Start using ResumeIQ AI today.
            </p>

          </div>

          <form
            onSubmit={handleSignup}
            className="space-y-6"
          >

            <div>

              <label className="text-gray-700 font-medium">
                Full Name
              </label>

              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                placeholder="Enter your full name"
              />

            </div>

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
                placeholder="Create password"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5 rounded-2xl text-xl font-semibold transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-purple-700 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;