import Sidebar from "../components/Sidebar";

function Analysis() {

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

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-900">
            Resume Analysis
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            AI-powered ATS resume evaluation report.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-gray-500 text-xl font-medium">
              ATS Score
            </h2>

            <p className="text-6xl font-bold text-purple-700 mt-5">
              {score}%
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-gray-500 text-xl font-medium">
              Skills Matched
            </h2>

            <p className="text-6xl font-bold text-green-600 mt-5">
              {strengths.length}
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-gray-500 text-xl font-medium">
              Missing Keywords
            </h2>

            <p className="text-6xl font-bold text-red-500 mt-5">
              {missingSkills.length}
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Resume Strengths
            </h2>

            <div className="space-y-4">

              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="bg-green-50 text-green-700 px-5 py-4 rounded-2xl"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Missing Skills
            </h2>

            <div className="space-y-4">

              {missingSkills.map((item, index) => (
                <div
                  key={index}
                  className="bg-red-50 text-red-600 px-5 py-4 rounded-2xl"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Full AI Analysis Report
          </h2>

          <div className="text-gray-700 whitespace-pre-wrap leading-9 text-lg">
            {analysis}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Analysis;