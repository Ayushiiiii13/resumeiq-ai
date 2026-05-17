const express = require("express");
const pdfParse = require("pdf-parse");
const upload = require("../upload");
const Groq = require("groq-sdk");

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/upload", upload.single("resume"), async (req, res) => {

   try {

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const pdfData = await pdfParse(req.file.buffer);

    const resumeText = pdfData.text;

    const jobDescription = req.body.jobDescription || "";

    const prompt = `
You are an ATS Resume Analyzer AI.

Analyze this resume against the provided job description.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return the response in this exact format:

ATS Score: <score>/100

Strengths:
- point
- point

Missing Skills:
- point
- point

Improvements:
- point
- point

Final Suggestions:
paragraph
`;

    const completion = await groq.chat.completions.create({
      messages: [
        {role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
    });

    const analysis = completion.choices[0]?.message?.content;

    res.json({
      analysis,
    });

  } catch (error) {console.log(error);

    res.status(500).json({
      message: "Error analyzing resume",
    });
  }
});

module.exports = router;