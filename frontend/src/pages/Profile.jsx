import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const history =
    JSON.parse(localStorage.getItem("history")) || [];

  const latestAnalysis =
    localStorage.getItem("analysis") || "";

  const latestScore =
    latestAnalysis.match(/ATS Score:\s*(\d+)/)?.[1] || 0;

  const handleLogout = () => {

    localStorage.removeItem("loggedIn");

    navigate("/login");
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold text-gray-900">
              Profile
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Manage your ResumeIQ AI profile.
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
          >
            Logout
          </button>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

            <div className="flex flex-col items-center">

              <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center text-5xl font-bold text-purple-700 uppercase">
                {user?.name?.charAt(0) || "U"}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-6">
                {user?.name || "User"}
              </h2>

              <p className="text-gray-500 mt-2">
                ResumeIQ AI User
              </p>

            </div>

            <div className="mt-10 space-y-5">

              <div>
                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p className="text-gray-800 font-medium mt-1">
                  {user?.email || "No email found"}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Total Analyses
                </p>

                <p className="text-gray-800 font-medium mt-1">
                  {history.length}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Latest ATS Score
                </p>

                <p className="text-green-600 font-bold text-3xl mt-2">
                  {latestScore}%
                </p>
              </div>

            </div>

          </div>

          <div className="col-span-2 space-y-6">

            <div className="grid grid-cols-3 gap-6">

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

                <h2 className="text-gray-500 text-xl font-medium">
                  AI Reports
                </h2>

                <p className="text-6xl font-bold text-purple-700 mt-5">
                  {history.length}
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

                <h2 className="text-gray-500 text-xl font-medium">
                  ATS Score
                </h2>

                <p className="text-6xl font-bold text-green-600 mt-5">
                  {latestScore}%
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

                <h2 className="text-gray-500 text-xl font-medium">
                  Account Status
                </h2>

                <p className="text-4xl font-bold text-blue-600 mt-8">
                  Active
                </p>

              </div>

            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Recent Activity
              </h2>

              <div className="space-y-5">

                {history.length > 0 ? (

                  history.slice(0, 3).map((item) => {

                    const score =
                      item.analysis.match(/ATS Score:\s*(\d+)/)?.[1] || 0;

                    return (

                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-[#f8fafc] border border-gray-200 rounded-2xl p-5"
                      >

                        <div>

                          <h3 className="text-xl font-semibold text-gray-900">
                            ATS Score: {score}%
                          </h3>

                          <p className="text-gray-500 mt-2">
                            {item.date}
                          </p>

                        </div>

                        <div className="bg-purple-100 text-purple-700 px-5 py-2 rounded-xl font-medium">
                          Completed
                        </div>

                      </div>
                    );
                  })

                ) : (

                  <p className="text-gray-400">
                    No recent activity found.
                  </p>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;