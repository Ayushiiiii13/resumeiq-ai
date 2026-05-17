import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-72 bg-white border-r border-gray-200 min-h-screen p-8 flex flex-col justify-between">

      <div>

        <div className="mb-14">
          <h1 className="text-4xl font-bold text-purple-700">
            ResumeIQ
          </h1>

          <p className="text-gray-500 mt-2">
            AI Resume Analyzer
          </p>
        </div>

        <div className="flex flex-col gap-3">

          <Link
            to="/dashboard"
            className="px-5 py-4 rounded-2xl hover:bg-purple-50 text-gray-700 font-medium transition"
          >
            Dashboard
          </Link>

          <Link
            to="/upload"
            className="px-5 py-4 rounded-2xl hover:bg-purple-50 text-gray-700 font-medium transition"
          >
            Upload Resume
          </Link>

          <Link
            to="/analysis"
            className="px-5 py-4 rounded-2xl hover:bg-purple-50 text-gray-700 font-medium transition"
          >
            Analysis
          </Link>

          <Link
            to="/history"
            className="px-5 py-4 rounded-2xl hover:bg-purple-50 text-gray-700 font-medium transition"
          >
            History
          </Link>

          <Link
            to="/profile"
            className="px-5 py-4 rounded-2xl hover:bg-purple-50 text-gray-700 font-medium transition"
          >
            Profile
          </Link>

          <Link
           to="/settings"
           className="px-5 py-4 rounded-2xl hover:bg-purple-50 text-gray-700 font-medium transition"
          >
           Settings
        </Link>

        </div>

      </div>

      <div className="bg-purple-50 border border-purple-100 p-5 rounded-3xl">

        <h2 className="text-purple-700 font-bold text-lg">
          AI Resume Tips
        </h2>

        <p className="text-gray-600 mt-3 leading-7 text-sm">
          Tailor your resume to the job description to improve ATS matching.
        </p>

      </div>

    </div>
  );
}

export default Sidebar;