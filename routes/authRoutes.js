const express = require("express");
const router = express.Router();

const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

router.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const token =
      crypto.randomBytes(32).toString("hex");

    const user = {
      name,
      email,
      password,
      isVerified: false,
      verificationToken: token,
    };

    console.log(user);

    const verificationLink =
      `http://localhost:5000/api/auth/verify/${token}`;

    await sendEmail(
      email,
      "Verify Your ResumeIQ Account",
      `
        <h1>Welcome to ResumeIQ AI</h1>

        <p>Click below to verify your email:</p>

        <a href="${verificationLink}">
          Verify Account
        </a>
      `
    );

    res.json({
      message:
        "Signup successful. Verification email sent.",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/verify/:token", async (req, res) => {

  try {

    const token = req.params.token;

    console.log("Verified Token:", token);

    res.send("Email verified successfully!");

  } catch (error) {

    console.log(error);

    res.status(500).send("Verification failed");
  }
});

module.exports = router;