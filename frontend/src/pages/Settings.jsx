import Sidebar from "../components/Sidebar";

function Settings() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-900">
            Settings
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage your ResumeIQ account preferences.
          </p>

        </div>

        <div className="space-y-6">

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Account Information
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-gray-400 text-sm">
                  Full Name
                </p>

                <p className="text-gray-800 text-xl font-medium mt-2">
                  {user?.name || "No name found"}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Email Address
                </p>

                <p className="text-gray-800 text-xl font-medium mt-2">
                  {user?.email || "No email found"}
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              AI Preferences
            </h2>

            <div className="space-y-4">

              <div className="bg-purple-50 border border-purple-100 p-5 rounded-2xl text-purple-700 font-medium">
                AI Resume Analysis Enabled
              </div>

              <div className="bg-green-50 border border-green-100 p-5 rounded-2xl text-green-700 font-medium">
                ATS Tracking Enabled
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;