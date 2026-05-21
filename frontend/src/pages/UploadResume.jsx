import Sidebar from "../components/Sidebar";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import axios from "axios";

function UploadResume() {

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({

    accept: {
      "application/pdf": [".pdf"],
    },

    onDrop: (acceptedFiles, rejectedFiles) => {

      setError("");

      if (rejectedFiles.length > 0) {
        setError("Only PDF files are allowed.");
        return;
      }

      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
        setFileName(acceptedFiles[0].name);
      }
    },
  });

  const handleAnalyze = async () => {

    if (!file) {
      setError("Please upload a PDF resume first.");
      return;
    }

    try {

      setLoading(true);
      setError("");
      setAnalysis("");

      const formData = new FormData();

      formData.append("resume", file);
      formData.append("jobDescription", jobDescription);

      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

     setAnalysis(response.data.analysis);

     localStorage.setItem(
      "analysis",
     response.data.analysis
    );

    const previousHistory =
    JSON.parse(localStorage.getItem("history")) || [];

    const newAnalysis = {
     id: Date.now(),
     analysis: response.data.analysis,
     date: new Date().toLocaleString(),
    };

     localStorage.setItem(
  "history",
  JSON.stringify([newAnalysis, ...previousHistory])
    );

    } catch (error) {

      console.log(error);

      setError("Error analyzing resume.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-900">
            Upload Resume
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Upload your resume and get AI-powered ATS analysis.
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-3xl p-20 text-center cursor-pointer transition
            ${
              isDragActive
                ? "border-purple-500 bg-purple-50"
                : "border-gray-300 hover:border-purple-500"
            }`}
          >

            <input {...getInputProps()} />

            <h2 className="text-4xl font-bold text-gray-900">
              Drag & Drop Resume
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Upload your PDF resume for AI analysis
            </p>

            <button className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Browse Files
            </button>

          </div>

          {error && (
            <div className="mt-8 bg-red-50 border border-red-200 text-red-600 p-5 rounded-2xl">
              {error}
            </div>
          )}

          {fileName && (
            <div className="mt-8 bg-green-50 border border-green-200 p-5 rounded-2xl">

              <p className="text-green-700 font-semibold text-lg">
                Uploaded Successfully
              </p>

              <p className="text-gray-600 mt-2">
                {fileName}
              </p>

            </div>
          )}

          <div className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Job Description
            </h2>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job description here..."
              className="w-full h-56 bg-[#f8fafc] border border-gray-300 rounded-2xl p-6 outline-none focus:border-purple-500"
            />

          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-10 bg-purple-700 hover:bg-purple-800 disabled:bg-purple-400 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition"
          >
            {loading ? "Analyzing Resume..." : "Analyze Resume"}
          </button>

          {analysis && (
            <div className="mt-10 bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                AI Resume Analysis
              </h2>

              <div className="text-gray-700 whitespace-pre-wrap leading-8 text-lg">
                {analysis}
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default UploadResume;