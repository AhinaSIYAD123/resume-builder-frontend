import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Steps from "./Steps";
import Preview from "./Preview";

export default function Form() {
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      fullName: "",
      jobTitle: "",
      location: ""
    },

      contactDetails:{
      email: "",
      phoneNumber: "",
      github: "",
      linkedIn: "",
      portfolio: "",
    },
    educationDetails: {
      course: "",
      college: "",
      university: "",
      passout: "",
    },
    workExperience: {
      jobTitle: "",
      company: "",
      location: "",
      duration: "",
    },
    skills: [],
    summary: "",
  });

  const [isFinished, setIsFinished] = useState(false);
  const [resumeId, setResumeId] = useState("");

  return (
    <div>
      {isFinished ? (
        <Box sx={{ p: 3 }}>
          <Preview
            resumeData={resumeData}
            setResumeData={setResumeData}
            resumeId={resumeId}
            setResumeId={setResumeId}
          />
        </Box>
      ) : (
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            p: 3,
            backgroundColor: "#f9f9f9",
            minHeight: "100vh",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Steps
              resumeData={resumeData}
              setResumeData={setResumeData}
              setIsFinished={setIsFinished}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Preview
              resumeData={resumeData}
              setResumeData={setResumeData}
              resumeId={resumeId}
              setResumeId={setResumeId}
            />
          </Box>
        </Stack>
      )}
    </div>
  );
}
