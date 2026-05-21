import Sidebar from "../components/Sidebar";

function History() {

  const history =
    JSON.parse(localStorage.getItem("history")) || [];

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-900">
            Analysis History
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            View all previous AI resume analyses.
          </p>

        </div>

        <div className="space-y-6">

          {history.length === 0 ? (

            <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center text-gray-500 shadow-sm">
              No analysis history found.
            </div>

          ) : (

            history.map((item) => {

              const score =
              item.analysis.match(/ATS Score:\s*(\d+)/)?.[1] || 0;

              return (

                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h2 className="text-3xl font-bold text-gray-900">
                        ATS Score: {score}%
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {item.date}
                      </p>

                    </div>

                    <div className="bg-purple-100 text-purple-700 px-6 py-3 rounded-2xl font-semibold">
                      AI Analysis
                    </div>

                  </div>

                  <div className="mt-8 text-gray-700 leading-8 whitespace-pre-wrap">
                    {item.analysis.slice(0, 500)}...
                  </div>

                </div>
              );
            })

          )}

        </div>

      </div>

    </div>
  );
}

export default History;