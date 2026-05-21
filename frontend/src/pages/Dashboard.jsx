import Sidebar from "../components/Sidebar";
import ATSChart from "../components/ATSChart";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const analysis =
    localStorage.getItem("analysis") || "";

  const score =
    analysis.match(/ATS Score:\s*(\d+)/)?.[1] || 0;

  const strengths =
    analysis.match(/Strengths:\s*([\s\S]*?)Missing Skills:/)?.[1]
      ?.split("-")
      .map((item) => item.trim())
      .filter(Boolean) || [];

  const missingSkills =
    analysis.match(/Missing Skills:\s*([\s\S]*?)Improvements:/)?.[1]
      ?.split("-")
      .map((item) => item.trim())
      .filter(Boolean) || [];

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              AI-powered resume insights
            </p>

          </div>

          <button
            onClick={() => navigate("/upload")}
            className="bg-purple-700 hover:bg-purple-800 text-white px-7 py-4 rounded-2xl font-semibold transition"
          >
            Upload Resume
          </button>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <ATSChart score={score} />

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm h-[320px] flex flex-col justify-center">

            <h2 className="text-gray-500 text-2xl font-medium">
              Skills Matched
            </h2>

            <p className="text-7xl font-bold mt-6 text-green-600">
              {strengths.length}
            </p>

            <p className="text-gray-500 mt-4 text-lg">
              AI-detected strengths
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm h-[320px] flex flex-col justify-center">

            <h2 className="text-gray-500 text-2xl font-medium">
              Missing Keywords
            </h2>

            <p className="text-7xl font-bold mt-6 text-red-500">
              {missingSkills.length}
            </p>

            <p className="text-gray-500 mt-4 text-lg">
              ATS improvements needed
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Resume Strengths
            </h2>

            <div className="space-y-4">

              {strengths.length > 0 ? (
                strengths.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-50 text-green-700 px-5 py-4 rounded-2xl"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <p className="text-gray-400">
                  No strengths found.
                </p>
              )}

            </div>

          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Missing Skills
            </h2>

            <div className="space-y-4">

              {missingSkills.length > 0 ? (
                missingSkills.map((item, index) => (
                  <div
                    key={index}
                    className="bg-red-50 text-red-600 px-5 py-4 rounded-2xl"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <p className="text-gray-400">
                  No missing skills found.
                </p>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;