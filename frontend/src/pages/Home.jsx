import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="bg-[#f8fafc] min-h-screen">

      <nav className="flex items-center justify-between px-16 py-8 border-b border-gray-200 bg-white">

        <div>

          <h1 className="text-4xl font-bold text-purple-700">
            ResumeIQ
          </h1>

          <p className="text-gray-500 mt-1">
            AI Resume Analyzer
          </p>

        </div>

        <div className="flex items-center gap-5">

          <Link
            to="/login"
            className="text-gray-700 font-medium"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-2xl font-semibold transition"
          >
            Get Started
          </Link>

        </div>

      </nav>

      <section className="px-16 py-24">

        <div className="max-w-4xl">

          <div className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full inline-block font-medium">
            AI-Powered Resume Optimization
          </div>

          <h1 className="text-7xl font-bold text-gray-900 leading-tight mt-8">
            Improve Your Resume With Intelligent ATS Analysis
          </h1>

          <p className="text-gray-500 text-2xl leading-10 mt-8 max-w-3xl">
            Upload your resume and get instant AI-powered feedback,
            ATS scoring, skill gap analysis, and personalized
            improvement suggestions.
          </p>

          <div className="flex items-center gap-5 mt-10">

            <Link
              to="/upload"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-5 rounded-2xl text-xl font-semibold transition"
            >
              Analyze Resume
            </Link>

            <Link
              to="/dashboard"
              className="bg-white border border-gray-300 hover:border-purple-500 text-gray-700 px-8 py-5 rounded-2xl text-xl font-semibold transition"
            >
              View Dashboard
            </Link>

          </div>

        </div>

      </section>

      <section className="px-16 pb-24">

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <div className="text-5xl mb-5">
              🤖
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              AI Analysis
            </h2>

            <p className="text-gray-500 leading-8 mt-4">
              Advanced AI evaluates resumes against ATS systems.
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <div className="text-5xl mb-5">
              📈
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              ATS Score
            </h2>

            <p className="text-gray-500 leading-8 mt-4">
              Get accurate ATS compatibility scores instantly.
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <div className="text-5xl mb-5">
              🎯
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Skill Gap Detection
            </h2>

            <p className="text-gray-500 leading-8 mt-4">
              Discover missing skills and improve job matching.
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

            <div className="text-5xl mb-5">
              ⚡
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Instant Reports
            </h2>

            <p className="text-gray-500 leading-8 mt-4">
              Receive detailed AI-generated resume reports instantly.
            </p>

          </div>

        </div>

      </section>

      <section className="px-16 pb-24">

        <div className="bg-white border border-gray-200 rounded-[40px] p-16 shadow-sm">

          <div className="grid grid-cols-3 gap-10">

            <div>

              <h2 className="text-6xl font-bold text-purple-700">
                1K+
              </h2>

              <p className="text-gray-500 text-xl mt-4">
                Resumes Analyzed
              </p>

            </div>

            <div>

              <h2 className="text-6xl font-bold text-green-600">
                92%
              </h2>

              <p className="text-gray-500 text-xl mt-4">
                ATS Improvement Rate
              </p>

            </div>

            <div>

              <h2 className="text-6xl font-bold text-red-500">
                500+
              </h2>

              <p className="text-gray-500 text-xl mt-4">
                AI Reports Generated
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="px-16 pb-24">

        <div className="bg-gradient-to-r from-purple-700 to-purple-500 rounded-[40px] p-20 text-center text-white">

          <h2 className="text-6xl font-bold leading-tight">
            Ready to Improve Your Resume?
          </h2>

          <p className="text-2xl mt-8 text-purple-100 max-w-3xl mx-auto leading-10">
            Start using ResumeIQ AI today and optimize your resume
            for better ATS performance and job opportunities.
          </p>

          <Link
            to="/upload"
            className="inline-block mt-10 bg-white text-purple-700 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold transition"
          >
            Start Analyzing
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;